import { GetStaticProps } from 'next'
import { Sidebar } from '../../components/Sidebar'
import { db } from '../../config/firebase'
import { useAuth } from '../../contexts/AuthContext'
import RankingTemplate from '../../templates/RankingTemplate'
import { redirectTo } from '../../utils/redirectTo'

interface UserProps {
  challengesCompleted: number
  currentExperience: number
  totalExperience: number
  level: number
  photoURL: string
  id: string
  name: string
}
interface IRankingProps {
  users: UserProps[]
}

function Ranking(RankingProps: IRankingProps) {
  const { isLoggedIn } = useAuth()
  return (
    <>
      {isLoggedIn ? (
        <main style={{ display: 'flex' }}>
          <Sidebar />
          <RankingTemplate {...RankingProps} />
        </main>
      ) : (
        redirectTo('/login')
      )}
    </>
  )
}

export default Ranking

export const getStaticProps: GetStaticProps = async () => {
  const users = []

  try {
    const querySnapshot = await db
      .collection('users')
      .orderBy('totalExperience')
      .get()

    querySnapshot.forEach((doc) => {
      users.push(doc.data())
    })
  } catch (error) {
    console.log(error)
  }

  users.reverse()

  return {
    props: {
      users,
    },
    revalidate: 90,
  }
}

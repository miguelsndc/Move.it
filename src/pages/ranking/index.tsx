import { GetStaticProps } from 'next'
import { db } from '../../config/firebase'
import { useAuth } from '../../contexts/AuthContext'
import RankingTemplate from '../../templates/RankingTemplate'
import { redirectTo } from '../../utils/redirectTo'

interface UserProps {
  ChallengesCompleted: number
  CurrentExperience: number
  Level: number
  PhotoUrl: string
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
        <RankingTemplate {...RankingProps} />
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
      .orderBy('ChallengesCompleted')
      .get()

    querySnapshot.forEach((doc) => {
      users.push(doc.data())
    })
  } catch (error) {
    console.log(error)
  }

  return {
    props: {
      users,
    },
    revalidate: 90,
  }
}

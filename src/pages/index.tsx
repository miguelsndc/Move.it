import HomeTemplate from '../templates/HomeTemplate'
import { redirectTo } from '../utils/redirectTo'
import { useAuth } from '../contexts/AuthContext'

function Home() {
  const { isLoggedIn } = useAuth()
  const test = {
    level: 1,
    currentExperience: 1,
    challengesCompleted: 1,
    photoUrl: '1',
    name: ' ',
  }

  return <>{isLoggedIn ? <HomeTemplate {...test} /> : redirectTo('/login')}</>
}

export default Home

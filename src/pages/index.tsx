import HomeTemplate from '../templates/HomeTemplate'
import { Sidebar } from '../components/Sidebar'
import { redirectTo } from '../utils/redirectTo'
import { useAuth } from '../contexts/AuthContext'
import { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { Spinner } from '../components/LoadingSpinner/styles'

function Home() {
  const { isLoggedIn, user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [currentUserData, setCurrentUserData] = useState(null)

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
          setCurrentUserData(doc.data())
          setLoading(false)
        })
    }
  }, [])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {' '}
          {isLoggedIn ? (
            <main style={{ display: 'flex' }}>
              <Sidebar />
              <HomeTemplate {...currentUserData} />
            </main>
          ) : (
            redirectTo('/login')
          )}
        </>
      )}
    </>
  )
}

export default Home

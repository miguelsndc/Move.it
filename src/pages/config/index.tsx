import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../components/Sidebar'
import { db } from '../../config/firebase'
import { useAuth } from '../../contexts/AuthContext'
import ConfigTemplate from '../../templates/ConfigTemplate'

function Config() {
  const { signOut, isLoggedIn, user } = useAuth()
  const router = useRouter()

  if (!isLoggedIn) {
    router.push('/login')
  }

  const [currentUserData, setCurrentUserData] = useState(null)
  const [loading, setLoading] = useState(true)

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
      {loading || (
        <>
          {isLoggedIn && (
            <main style={{ display: 'flex' }}>
              <Sidebar />
              <ConfigTemplate {...currentUserData} signOut={signOut} />
            </main>
          )}
        </>
      )}
    </>
  )
}

export default Config

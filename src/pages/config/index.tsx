import { useRouter } from 'next/router'
import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import { useAuth } from '../../contexts/AuthContext'

function Config() {
  const { signOut, isLoggedIn } = useAuth()
  const router = useRouter()

  if (!isLoggedIn) {
    router.push('/login')
  }

  return (
    <>
      {isLoggedIn && (
        <main style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ margin: '0 auto' }}>
            <button onClick={signOut}>sair</button>
          </div>
        </main>
      )}
    </>
  )
}

export default Config

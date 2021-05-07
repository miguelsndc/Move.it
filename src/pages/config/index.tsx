import React from 'react'
import Sidebar from '../../components/Sidebar'
import { useAuth } from '../../contexts/AuthContext'
import { redirectTo } from '../../utils/redirectTo'

function Config() {
  const { signOut, isLoggedIn } = useAuth()

  return (
    <>
      {isLoggedIn ? (
        <main style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ margin: '0 auto' }}>
            <button onClick={signOut}>sair</button>
          </div>
        </main>
      ) : (
        redirectTo('/login')
      )}
    </>
  )
}

export default Config

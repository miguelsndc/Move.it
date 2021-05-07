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
          config
          <button onClick={signOut}>sair</button>
        </main>
      ) : (
        redirectTo('/login')
      )}
    </>
  )
}

export default Config

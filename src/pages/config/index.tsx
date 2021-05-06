import React from 'react';
import Sidebar from '../../components/Sidebar';
import withAuth from '../../components/auth/WithAuth';
import { useAuth } from '../../contexts/AuthContext';

function Config() {
  const { signOut } = useAuth();

  return (
    <main style={{ display: 'flex' }}>
      <Sidebar />
      config
      <button onClick={signOut}>sair</button>
    </main>
  );
}

export default withAuth(Config);

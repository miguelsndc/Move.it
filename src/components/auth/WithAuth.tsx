import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Spinner from '../LoadingSpinner';
import { useAuth } from '../../contexts/AuthContext';
import Head from 'next/head';

const withAuth = (Component: any) => (): JSX.Element => {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [userShouldLogin, setUserShouldLogin] = useState(false);
  const [timeouts, setTimeouts] = useState<NodeJS.Timeout[]>([]);

  useEffect(() => {
    if (!user) {
      const timeoutRef = setTimeout(() => setUserShouldLogin(true), 1250);

      setTimeouts([...timeouts, timeoutRef]);
    }

    if (user) {
      setIsLoading(false);
      setUserShouldLogin(false);
      timeouts.map((timeout) => clearTimeout(timeout));
    }
  }, [user]);

  if (isLoading && !userShouldLogin) {
    return (
      <>
        <div>
          <Spinner />
        </div>
      </>
    );
  }

  if (userShouldLogin) {
    setUserShouldLogin(false);
    router.push('/signup');
  }

  if (user) {
    return <Component />;
  }

  return (
    <div>
      <Spinner />
    </div>
  );
};

export default withAuth;

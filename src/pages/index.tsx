import Head from 'next/head';
import withAuth from '../components/auth/WithAuth';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import { db } from '../config/firebase';

import { HomeContainer } from '../styles/pages/Home';

import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import { Spinner } from '../components/LoadingSpinner/styles';

function Home() {
  const { user } = useAuth();

  const [level, setLevel] = useState(null);
  const [currentExperience, setCurrentExperience] = useState(null);
  const [challengesCompleted, setChallengesCompleted] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection('users')
      .doc(user.uid)
      .onSnapshot((doc) => {
        const { Level, CurrentExperience, ChallengesCompleted } = doc.data();

        setLevel(Level);
        setCurrentExperience(CurrentExperience);
        setChallengesCompleted(ChallengesCompleted);

        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ChallengesProvider
          level={level}
          currentExperience={currentExperience}
          challengesCompleted={challengesCompleted}
        >
          <HomeContainer>
            <Head>
              <title>Início | move.it</title>
            </Head>
            <ExperienceBar />
            <CountdownProvider>
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </HomeContainer>
        </ChallengesProvider>
      )}
    </>
  );
}

export default withAuth(Home);

import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengeBox } from '../components/ChallengeBox'

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import { HomeContainer } from '../styles/Home'

interface UserProps {
  level: number
  currentExperience: number
  challengesCompleted: number
  totalExperience: number
  photoURL: string
  name: string
}

export default function HomeTemplate({
  level,
  currentExperience,
  challengesCompleted,
  name,
  photoURL,
  totalExperience,
}: UserProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
      totalExperience={totalExperience}
    >
      <HomeContainer>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile photoURL={photoURL} name={name} />
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
  )
}

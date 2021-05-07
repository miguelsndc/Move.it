import React from 'react'
import Sidebar from '../components/Sidebar'

import {
  Container,
  Rank,
  InfoWrapper,
  UserInfo,
  Position,
  Profile,
  Experience,
} from '../styles/Ranking'

interface UserProps {
  ChallengesCompleted: number
  CurrentExperience: number
  Level: number
  PhotoUrl: string
  id: string
  name: string
}

interface IRankingProps {
  users: UserProps[]
}

export default function RankingTemplate({ users }: IRankingProps) {
  return (
    <main style={{ display: 'flex' }}>
      <Sidebar />
      <Container>
        <h1>Leaderboard</h1>
        <Rank>
          {users.map((doc, index) => {
            return (
              <InfoWrapper key={doc.id}>
                <Position>{index + 1}</Position>
                <UserInfo>
                  <Profile>
                    <img src="/diver.svg" alt="Foto" />
                    <div>
                      <strong>{doc.name}</strong>
                      <p>Nível {doc.Level}</p>
                    </div>
                  </Profile>
                  <Experience>
                    <div>
                      <strong>{doc.ChallengesCompleted}</strong>
                      <p>completados</p>
                    </div>
                    <div>
                      <strong>{doc.CurrentExperience}</strong>
                      <p>XP</p>
                    </div>
                  </Experience>
                </UserInfo>
              </InfoWrapper>
            )
          })}
        </Rank>
      </Container>
    </main>
  )
}

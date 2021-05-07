import React from 'react'

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
  challengesCompleted: number
  currentExperience: number
  totalExperience: number
  level: number
  photoURL: string
  id: string
  name: string
}

interface IRankingProps {
  users: UserProps[]
}

export default function RankingTemplate({ users }: IRankingProps) {
  return (
    <Container>
      <h1>Leaderboard</h1>
      <Rank>
        {users.length ? (
          <>
            {users.map((doc, index) => {
              return (
                <InfoWrapper key={doc.id}>
                  <Position>{index + 1}</Position>
                  <UserInfo>
                    <Profile>
                      <img src={doc.photoURL || '/diver.svg'} alt="Foto" />
                      <div>
                        <strong>{doc.name}</strong>
                        <p>Nível {doc.level}</p>
                      </div>
                    </Profile>
                    <Experience>
                      <div>
                        <strong>{doc.challengesCompleted}</strong>
                        <p>completados</p>
                      </div>
                      <div>
                        <strong>{doc.totalExperience}</strong>
                        <p>XP</p>
                      </div>
                    </Experience>
                  </UserInfo>
                </InfoWrapper>
              )
            })}
          </>
        ) : (
          <div>Ainda não há usuários.</div>
        )}
      </Rank>
    </Container>
  )
}

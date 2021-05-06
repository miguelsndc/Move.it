import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import withAuth from '../../components/auth/WithAuth'
import { Spinner } from '../../components/LoadingSpinner/styles'
import Sidebar from '../../components/Sidebar'
import { db } from '../../config/firebase'
import {
  Container,
  Rank,
  InfoWrapper,
  UserInfo,
  Position,
  Profile,
  Experience,
} from '../../styles/Ranking'

interface User {
  id: string
  ChallengesCompleted: number
  CurrentExperience: number
  Level: number
  PhotoUrl: string
  name: string
}

function Ranking(HomeProps: any) {
  console.log(HomeProps)
  const usersRef = db.collection('users')
  const [docs, setDocs] = useState<User[]>()
  const [loading, setLoading] = useState(true)

  async function sortUsersByChallengesCompleted() {
    const snapshot = usersRef.orderBy('ChallengesCompleted').get()
    const descendingOrderSnapshot: User[] = []
    ;(await snapshot).docs.forEach((doc) => {
      const {
        id,
        ChallengesCompleted,
        CurrentExperience,
        Level,
        PhotoUrl,
        name,
      } = doc.data()
      descendingOrderSnapshot.push({
        id,
        ChallengesCompleted,
        CurrentExperience,
        Level,
        PhotoUrl,
        name,
      })
    })
    descendingOrderSnapshot.reverse()
    setDocs(descendingOrderSnapshot)
    setLoading(false)
  }

  useEffect(() => {
    sortUsersByChallengesCompleted()
  }, [])

  return (
    <main style={{ display: 'flex' }}>
      <Sidebar />
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <h1>Leaderboard</h1>
          <Rank>
            {docs.map((doc, index) => {
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
      )}
    </main>
  )
}

export default withAuth(Ranking)

import { useChallenges } from '../../contexts/ChallengesContext'
import { useCountdown } from '../../contexts/CountdownContext'

import {
  ChallengeActive,
  ChallengeBoxContainer,
  ChallengeNotActive,
  ChallengeFailedButton,
  ChallengeSucceededButton,
} from './styles'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenges()

  const { resetCountDown } = useCountdown()

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountDown()
  }
  function handleChallengeFailed() {
    resetChallenge()
    resetCountDown()
  }

  return (
    <ChallengeBoxContainer>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeFailedButton onClick={handleChallengeFailed}>
              Falhei
            </ChallengeFailedButton>
            <ChallengeSucceededButton onClick={handleChallengeSucceeded}>
              Completei
            </ChallengeSucceededButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um novo desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Avance de nível completando desafios
          </p>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  )
}

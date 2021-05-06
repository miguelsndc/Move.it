import { useChallenges } from '../../contexts/ChallengesContext'

import { CompletedChallengesContainer } from './styles'

export function CompletedChallenges() {
  const { challengesCompleted } = useChallenges()

  return (
    <CompletedChallengesContainer>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </CompletedChallengesContainer>
  )
}

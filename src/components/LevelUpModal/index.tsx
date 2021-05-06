import { useChallenges } from '../../contexts/ChallengesContext'

import { Overlay, LevelUpContainer } from './styles'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallenges()

  return (
    <Overlay>
      <LevelUpContainer>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo nível</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="icons/close.svg" alt="fechar modal" />
        </button>
      </LevelUpContainer>
    </Overlay>
  )
}

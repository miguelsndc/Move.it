import { useChallenges } from '../../contexts/ChallengesContext'
import { ProfileContainer } from './styles'

interface IProfileProps {
  name: string
  photoURL: string
}

export function Profile({ name, photoURL }: IProfileProps) {
  const { level } = useChallenges()

  return (
    <ProfileContainer>
      <img src={photoURL ? photoURL : '/diver.svg'} alt={name} />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  )
}

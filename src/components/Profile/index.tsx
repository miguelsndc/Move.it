import { useChallenges } from '../../contexts/ChallengesContext';
import { ProfileContainer } from './styles';

interface ProfileProps {
  name: string;
  photoUrl: string;
}

export function Profile({ name, photoUrl }: ProfileProps) {
  const { level } = useChallenges();

  return (
    <ProfileContainer>
      <img src={photoUrl ? photoUrl : '/diver.svg'} alt={name} />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
}

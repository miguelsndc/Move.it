import { useChallenges } from '../../contexts/ChallengesContext';
import { ProfileContainer } from './styles';

export function Profile() {
  const { level } = useChallenges();

  return (
    <ProfileContainer>
      <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src=" icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
}

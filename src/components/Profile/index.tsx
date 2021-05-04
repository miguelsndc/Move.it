import { ProfileContainer } from './styles';

interface ProfileProps {
  name: string;
  photoUrl: string;
  level: number;
}

export function Profile({ name, photoUrl, level }: ProfileProps) {
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

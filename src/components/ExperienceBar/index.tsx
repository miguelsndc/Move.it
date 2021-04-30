import { useChallenges } from '../../contexts/ChallengesContext';

import { CurrentExperience, ExperienceBarContainer, Bar } from './styles';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallenges();

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <ExperienceBarContainer>
      <span>0 xp</span>
      <div>
        <Bar BarWidth={percentToNextLevel}></Bar>
        <CurrentExperience DistanceFromStart={percentToNextLevel}>
          {currentExperience} xp
        </CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExperienceBarContainer>
  );
}

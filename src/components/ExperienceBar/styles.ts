import styled from 'styled-components'

interface BarProps {
  BarWidth: number
}

interface CurrentExperienceProps {
  DistanceFromStart: number
}

export const ExperienceBarContainer = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  & > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${(props) => props.theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;

    & > div {
      height: 4px;
      border-radius: 4px;
      background: ${(props) => props.theme.colors.green};
    }
  }
`

export const Bar = styled.div<BarProps>`
  width: ${(props) => `${props.BarWidth}%`};
  height: 4px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.green};
  transition: width 0.4s;
`

export const CurrentExperience = styled.span<CurrentExperienceProps>`
  left: ${(props) => `${props.DistanceFromStart}%`};
  position: absolute;
  top: 12px;
  transform: translateX(-50%);

  transition: left 0.4s;
`

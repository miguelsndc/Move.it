import styled, { keyframes } from 'styled-components';

const SpinningAnimation = keyframes`
 to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  position: absolute;

  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-top: -60px;
    margin-left: -35px;
    border-radius: 50%;
    border: 4px solid var(--gray-line);
    border-top-color: var(--blue-dark);
    animation: ${SpinningAnimation} 0.55s linear infinite;
  }
`;

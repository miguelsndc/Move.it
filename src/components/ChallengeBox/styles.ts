import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
  height: 100%;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    align-items: center;

    line-height: 1.4;

    max-width: 70%;
    margin-top: 3rem;

    img {
      width: 2rem;
    }
  }
`;

export const ChallengeActive = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
  }

  main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    strong {
      font-weight: 600;
      font-size: 2rem;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const ChallengeButton = styled.button.attrs({ type: 'button' })`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  color: var(--white);

  font-size: 1rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ChallengeFailedButton = styled(ChallengeButton)`
  background: var(--red);
`;

export const ChallengeSucceededButton = styled(ChallengeButton)`
  background: var(--green);
`;

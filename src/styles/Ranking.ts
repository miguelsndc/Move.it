import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 992px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  h1 {
    font-size: 2.6rem;
  }
`

export const Rank = styled.div`
  flex: 1 1 0%;
  margin-top: 2.5rem;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`

export const Position = styled.div`
  padding: 2.25rem;
  background: ${(props) => props.theme.colors.white};
  margin-right: 5px;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  background: white;
  padding: 0.92rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 100%;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 60%;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 0.75rem;
    border-radius: 50%;
  }

  div {
    strong {
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
  }
`
export const Experience = styled.div`
  width: 34%;
  display: flex;

  align-items: center;

  justify-content: space-between;
  text-align: center;

  & > div {
    display: flex;
    align-items: center;

    strong {
      color: ${(props) => props.theme.colors.blueDark};
      margin-right: 0.5rem;
    }
  }
`

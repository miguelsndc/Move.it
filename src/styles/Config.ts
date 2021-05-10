import styled, { keyframes } from 'styled-components'

const FadeIn = keyframes`
0% {
  opacity: 0
}
100% {
  opacity: 1;
}`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin: 2.5rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
      margin-top: 2rem;
      font-size: 1.85rem;
    }
  }

  img {
    width: 10.5rem;
    height: 10.5rem;
    border-radius: 50%;
  }
`
export const SignoutBtn = styled.button`
  border: 0;
  outline: 0;
  font: inherit;
  background: ${(props) => props.theme.colors.red};
  border-radius: 5px;
  color: white;
  width: 170px;
  height: 40px;
  transition: filter 0.2s;

  margin-top: 3.2rem;

  &:hover {
    filter: brightness(0.95);
  }
`
export const Form = styled.form`
  margin-top: 3rem;
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 1.1rem;
  }

  input {
    border: 1px solid ${(props) => props.theme.colors.grayLine};
    border-radius: 5px;
    height: 30px;
    padding-left: 8px;
  }

  button {
    border: 0;
    outline: 0;
    font: inherit;
    background: ${(props) => props.theme.colors.green};
    border-radius: 5px;
    color: white;
    font-size: 0.85rem;
    height: 30px;
    margin-left: 0.5rem;
    padding: 0 0.8rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.95);
    }
  }
`
export const Warning = styled.div`
  background: ${(props) => props.theme.colors.textHighlight};
  color: white;
  padding: 0.75rem;
  border-radius: 5px;

  position: absolute;

  animation: ${FadeIn} 0.3s;
`

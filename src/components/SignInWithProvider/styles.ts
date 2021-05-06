import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.grayLine};
  border-radius: 5px;
  background: white;

  height: 45px;
  font: inherit;

  margin-bottom: 1rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.97);
  }

  img {
    width: 23px;
    height: 23px;
    margin-right: 12px;
  }
`

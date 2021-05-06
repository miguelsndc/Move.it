import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  height: 100vh;
  width: 6.5rem;
  background: ${(props) => props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    margin: 1rem 0;
  }
`;

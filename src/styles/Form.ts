import styled from 'styled-components'

interface FieldProps {
  hasErrors?: boolean
}

export const FormGroup = styled.form`
  max-width: 420px;
  width: 100%;
  padding: 2rem;

  h1 {
    color: ${(props) => props.theme.colors.title};
    text-align: center;
    margin-bottom: 1.35rem;
  }

  button[type='submit'] {
    width: 100%;
    margin: 0.25rem auto;
    display: block;
    border: 0;
    border-radius: 5px;
    font: inherit;
    font-weight: 500;
    color: white;

    background: ${(props) => props.theme.colors.blue};
    transition: background 0.2s;
    height: 45px;

    &:hover {
      background: ${(props) => props.theme.colors.blueDark};
    }
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid ${(props) => props.theme.colors.grayLine};
    margin: 1em 0;
    padding: 0;
  }

  a {
    color: ${(props) => props.theme.colors.blue};
    text-decoration: underline;
  }
`

export const Field = styled.div<FieldProps>`
  margin: 1.2rem 0;

  input {
    width: 100%;
    height: 45px;
    padding: 20px 15px;

    border: 1px solid
      ${(props) =>
        props.hasErrors ? props.theme.colors.red : props.theme.colors.grayLine};

    outline: 0;
    border-radius: 5px;

    font: inherit;

    transition: all 0.2s;

    &:focus {
      border-color: ${(props) => props.theme.colors.blueDark};
    }

    &::placeholder {
      color: #d8d8d8;
    }
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.title};
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ErrorWarning = styled.div`
  color: ${(props) => props.theme.colors.red};
  margin: 0.5rem 0;
`

import styled from 'styled-components';

interface FieldProps {
  hasErrors?: boolean;
}

export const FormGroup = styled.form`
  max-width: 420px;
  width: 100%;
  padding: 2rem;

  h1 {
    color: var(--title);
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

    background: var(--blue);
    transition: background 0.2s;
    height: 45px;

    &:hover {
      background: var(--blue-dark);
    }
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid var(--gray-line);
    margin: 1em 0;
    padding: 0;
  }

  a {
    color: var(--blue);
    text-decoration: underline;
  }
`;

export const Field = styled.div<FieldProps>`
  margin: 1.2rem 0;

  input {
    width: 100%;
    height: 45px;
    padding: 20px 15px;

    border: 1px solid
      ${(props) => (props.hasErrors ? 'var(--red)' : 'var(--gray-line)')};

    outline: 0;
    border-radius: 5px;

    font: inherit;

    transition: all 0.2s;

    &:focus {
      border-color: var(--blue-dark);
    }

    &::placeholder {
      color: #d8d8d8;
    }
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: var(--title);
  }
`;
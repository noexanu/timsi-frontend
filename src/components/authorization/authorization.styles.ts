import styled from 'styled-components';

export const AuthorizationCardLayout = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
`;

export const AuthorizationCardMainSection = styled.h1`
  font-size: 25px;
`;

export const AuthorizationCardMinorSection = styled.h2`
  text-align: center;
  color: #ccc;
  font-size: 15px;
  font-weight: 500;
`;

export const AuthorizationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AuthorizationFormInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 0;
  margin: 0;
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  font-size: 17px;
  &::placeholder { color: #ccc; }
  &[type=button] { cursor: pointer; }
  &.error { border-bottom: 2px solid #f00; }
`;

export const AuthorizationFormContinueButton = styled(AuthorizationFormInput)`
  color: #fff;
  letter-spacing: 5px;
  background: linear-gradient(90deg, #4c3d92 0%, #829ec2 100%);
  &:hover { background: #4c3d92; }
`;

export const AuthorizationFormGithubButton = styled(AuthorizationFormInput)`
  color: #fff;
  background: linear-gradient(90deg, #000 0%, #646464 100%);
  &:hover { background: #000; }
`;

export const AuthorizationFormChangeButton = styled(AuthorizationFormInput)`
  background: #eee;
  &:hover { background: #ccc; }
`;

export const AuthorizationFormErrorContainer = styled.div`
  color: #f00;
  font-size: 12.5px;
`;

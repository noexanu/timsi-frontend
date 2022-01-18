import styled from 'styled-components';

interface LoginFormProps {
}

const LoginFormLayout = styled.div<LoginFormProps>`
  grid-area: 2/2/3/3;
  display: grid;
  grid-template-columns: 55% auto;
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0,0,0,.25);
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  
  .greetings {
    position: relative;
    background: linear-gradient(30deg, rgba(76,61,146,1) 0%, rgba(130,158,194,1) 50%, rgba(126,197,172,1) 100%);
    
    img {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 40%;
    }

    h1, h2 {
      position: absolute;
      left: 50%;
      color: #fff;
      font-weight: bold;
      transform:translate(-50%, -50%);
    }

    h1 {
      top: 42.5%;
      font-size: 50px;
    }

    h2 {
      top: 60%;
      font-size: 20px;
    }
  }

  .form {
    position: relative;

    h1, .container {
      position: absolute;
      left: 40px;
    }

    h1 {
      top: 60px;
      color: #000;
      font-size: 30px;
      font-weight: bold;
    }

    .container {
      top: 125px;
      right: 40px;
      display: grid;
      grid-gap: 25px;
      
      .border {
        background: linear-gradient(90deg, rgba(76,61,146,1) 0%, rgba(130,158,194,1) 50%, rgba(126,197,172,1) 100%);
        padding-bottom: 2px;
      }

      input[type=text], button {
        height: 35px;
      }

      input[type=text] {
        width: 100%;
        border: none;
        font-size: 20px;
        font-weight: 400;

        &:focus { outline: none; }
      }

      button {
        color: #fff;
        border: none;

        &:hover {
          cursor: pointer;
        }
      }

      .continue {
        background: linear-gradient(90deg, rgba(76,61,146,1) 0%, rgba(130,158,194,1) 50%, rgba(126,197,172,1) 100%);
        letter-spacing: 5px;
      }

      .github {
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(100,100,100,1) 100%);
      }

      h3 {
        color: #aaa;
        text-align: center
      }
    }
  }
`;

LoginFormLayout.defaultProps = {
};

export default LoginFormLayout;

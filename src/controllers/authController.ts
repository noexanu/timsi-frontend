import AuthService from 'services/authService';

const SUCCESS_LOGIN_REDIRECT_URL = 'http://localhost:8080/dashboard';
const SUCCESS_LOGOUT_REDIRECT_URL = 'http://localhost:8080/signin';
const GITHUB_REDIRECT_URL = 'http://localhost:3000/auth/github';
const GOOGLE_REDIRECT_URL = 'http://localhost:3000/auth/google';

export default class AuthController {
  private static successLoginRedirect = () => {
    window.location.replace(SUCCESS_LOGIN_REDIRECT_URL);
  };

  private static successLogoutRedirect = () => {
    window.location.replace(SUCCESS_LOGOUT_REDIRECT_URL);
  };

  public static signin = async (data: object) => {
    const response = await AuthService.signin(data);
    if (response.status === 200) this.successLoginRedirect();
  };

  public static signup = async (data: object) => {
    const response = await AuthService.signup(data);
    if (response.status === 200) this.successLoginRedirect();
  };

  public static logout = async () => {
    const response = await AuthService.logout();
    if (response.status === 200) this.successLogoutRedirect();
  };

  public static github = async () => {
    window.location.replace(GITHUB_REDIRECT_URL);
  };

  public static google = async () => {
    window.location.replace(GOOGLE_REDIRECT_URL);
  };
}

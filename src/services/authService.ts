import RequestHelper from 'helpers/requestHelper';

export default class AuthService {
  public static signin = async (data: object) => (
    RequestHelper.post('http://localhost:3000/auth/login', {
      body: JSON.stringify(data),
    })
  );

  public static signup = async (data: object) => (
    RequestHelper.post('http://localhost:3000/auth/register', {
      body: JSON.stringify(data),
    })
  );

  public static logout = async () => (
    RequestHelper.post('http://localhost:3000/auth/logout')
  );
}

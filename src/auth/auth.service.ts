export class AuthService {
  async oAuthLogin(user) {
    if (!user) throw new Error('User not found.');

    const payload = {
      email: user.email,
      name: user.name,
    };
    const jwt = 'user registered';
    return jwt;
  }
}

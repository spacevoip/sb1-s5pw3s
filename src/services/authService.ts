import { User } from '../types/User';

export class AuthService {
  private static instance: AuthService;

  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(username: string, password: string): Promise<User> {
    // Simulated authentication
    if (username === 'admin' && password === '35981517') {
      const user: User = {
        id: 1,
        username: 'admin',
        name: 'Administrador'
      };
      return user;
    }
    throw new Error('Credenciais inválidas');
  }

  async validateSession(userId: number): Promise<boolean> {
    return userId === 1;
  }
}
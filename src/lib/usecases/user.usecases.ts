import { UserRepository } from '@/lib/repositories/user.repository';

export class LoginUseCase {
  async execute({ email, password }: { email: string; password: string }) {
    if (email === 'teste@exemplo.com' && password === 'senha123') {
      const userData = {
        name: 'John Dee',
        email,
        token: '123',
      };

      await UserRepository.saveUserData({ ...userData });
      UserRepository.setAuthToken(userData.token);

      return { success: true, token: userData.token };
    }

    return { success: false };
  }
}

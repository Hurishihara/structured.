import { UserRepository } from '../../infrastructure/repositories/user.repository.ts';

export interface AuthService {
    isUsernameTaken(username: string): Promise<boolean>;
}

class ConcreteAuthService implements AuthService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async isUsernameTaken(username: string): Promise<boolean> {
        const user = await this.userRepository.findUserByUsername(username);
        if (user) {
            return true;
        }
        return false;
    }
}

export default ConcreteAuthService;
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { AuthService } from '../services/auth.service';

export interface RegisterUseCase {
    execute(username: string, password: string): Promise<string>;
}

class ConcreteRegisterUseCase implements RegisterUseCase {
    private authService: AuthService;
    private userRepository: UserRepository;

    constructor(
        authService: AuthService,
        userRepository: UserRepository
    ) {
        this.authService = authService;
        this.userRepository = userRepository;
    }
    async execute(username: string, password: string): Promise<string> {
        const isTaken = await this.authService.isUsernameTaken(username);
        if (isTaken) {
            throw new Error('Username already exists');
        }
        await this.userRepository.addUser(username, password);
        return 'User registered successfully';
    }
}

export default ConcreteRegisterUseCase;
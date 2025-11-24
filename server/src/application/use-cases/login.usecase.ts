import { ORPCError } from '@orpc/contract';
import { UserRepository } from '../../infrastructure/repositories/user.repository.js';

export interface LoginUseCase {
    execute(username: string, password: string): Promise<string>;
}

class ConcreteLoginUseCase implements LoginUseCase {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }
    async execute(username: string, password: string): Promise<string> {
        const user = await this.userRepository.findUserByUsername(username);
        if (!user) {
            throw new Error('User not found');
        }
        if (user.password !== password) {
            throw new ORPCError('UNAUTHORIZED', {
                message: 'Invalid username or password',
                data: { userName: username }
            })
        }
        return 'Login successful';
    }
}

export default ConcreteLoginUseCase;

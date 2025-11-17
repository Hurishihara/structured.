import ConcreteAuthService from '../../application/services/auth.service.ts'
import ConcreteLoginUseCase, { LoginUseCase } from '../../application/use-cases/login.usecase.ts'
import ConcreteRegisterUseCase, { RegisterUseCase } from '../../application/use-cases/register.usecase.ts'
import userRepository from '../repositories/user.repository.ts'

export interface Context {
    useCases: {
        auth: {
            loginUseCase: LoginUseCase,
            registerUseCase: RegisterUseCase
        }
    }
}

export const context: Context = {
    useCases: {
        auth: {
            loginUseCase: new ConcreteLoginUseCase(userRepository),
            registerUseCase: new ConcreteRegisterUseCase(
                new ConcreteAuthService(userRepository),
                userRepository
            )
        }
    }
}


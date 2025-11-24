import ConcreteAuthService from '../../application/services/auth.service.js'
import ConcreteLoginUseCase, { LoginUseCase } from '../../application/use-cases/login.usecase.js'
import ConcreteRegisterUseCase, { RegisterUseCase } from '../../application/use-cases/register.usecase.js'
import userRepository from '../repositories/user.repository.js'

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


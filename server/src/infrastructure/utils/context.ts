import ConcreteAuthService from '../../application/services/auth.service'
import ConcreteLoginUseCase, { LoginUseCase } from '../../application/use-cases/login.usecase'
import ConcreteRegisterUseCase, { RegisterUseCase } from '../../application/use-cases/register.usecase'
import userRepository from '../repositories/user.repository'

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



export interface UserRepository {
    findAllUsers(): Promise<{ username: string; password: string }[]>;
    findUserByUsername(username: string): Promise<{ username: string; password: string } | null>;
    addUser(username: string, password: string): Promise<void>;
}

class ConcreteUserRepository implements UserRepository {
    private users: {
        username: string;
        password: string;
    }[] = [
        {
            username: 'user1',
            password: 'pass111'
        },
        {
            username: 'user2',
            password: 'pass2'
        },
        {
            username: 'user3',
            password: 'pass3'
        }
    ]
    async findAllUsers(): Promise<{ username: string; password: string; }[]> {
        return this.users;
    }
    async findUserByUsername(username: string): Promise<{ username: string; password: string; } | null> {
        const user = this.users.find(user => user.username === username);
        return user || null;
    }
    async addUser(username: string, password: string): Promise<void> {
        this.users.push({ username, password });
    }
}

export default new ConcreteUserRepository();


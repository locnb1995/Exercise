import { Group } from './Group';

export class User {
    id: number;
    username: string;
    password: string;
    role: number;
    user_group: Group;
}

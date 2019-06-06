import { Group } from './Group';

export class User {
    id: number;
    username: string;
    password: string;
    role: number;
    // tslint:disable-next-line:variable-name
    user_group: Group;
}

import { Group } from './Group';

export class User {
    id: number;
    // tslint:disable-next-line:variable-name
    show_id: number;
    username: string;
    password: string;
    role: number;
    // tslint:disable-next-line:variable-name
    user_group: Group;
}

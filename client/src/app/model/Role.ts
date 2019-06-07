export class Role {
    id: number;
    username: string;
    // tslint:disable-next-line:variable-name
    role_id: number;

    // tslint:disable-next-line:variable-name
    constructor(username: string , role_id: number) {
        this.username = username;
        this.role_id = role_id;
    }
}

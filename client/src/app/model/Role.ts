export class Role {
    username: string;
    label: string;
    // tslint:disable-next-line:variable-name
    role_id: number;

    // tslint:disable-next-line:variable-name
    constructor(username: string , role_id: number , label: string) {
        this.username = username;
        this.role_id = role_id;
        this.label = label;
    }
}

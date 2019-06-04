export class UserToShow {
    id: number;
    username: string;
    admin: boolean;
    editor: boolean;
    normal: boolean;

    constructor() {
        this.admin = false;
        this.editor = false;
        this.normal = false;
    }
}

export class User {
    id: number;
    username: string;
    password: string;
    // firstName: string;
    // lastName: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    // date_joined: string;

    constructor(id: number, username: string, password: string, first_name: string, last_name: string, email: string, phone: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
    }
}
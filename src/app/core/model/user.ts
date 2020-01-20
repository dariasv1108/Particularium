export class User {
    private name: string;
    private user: string;
    private password: string;
    private location: string;
    private email: string;


    constructor() {
    }

    

    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {
        return this.name;
    }

    /**
     * Getter $user
     * @return {string}
     */
    public get $user(): string {
        return this.user;
    }

    /**
     * Getter $password
     * @return {string}
     */
    public get $password(): string {
        return this.password;
    }

    /**
     * Getter $location
     * @return {string}
     */
    public get $location(): string {
        return this.location;
    }

    /**
     * Getter $email
     * @return {string}
     */
    public get $email(): string {
        return this.email;
    }

    
    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }

    /**
     * Setter $user
     * @param {string} value
     */
    public set $user(value: string) {
        this.user = value;
    }

    /**
     * Setter $password
     * @param {string} value
     */
    public set $password(value: string) {
        this.password = value;
    }

    /**
     * Setter $location
     * @param {string} value
     */
    public set $location(value: string) {
        this.location = value;
    }

    /**
     * Setter $email
     * @param {string} value
     */
    public set $email(value: string) {
        this.email = value;
    }



}

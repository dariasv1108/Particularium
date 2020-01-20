import { User } from "./user";

export class Teacher extends User {
    private phone: string;
    private offers: Array<Offer>;


    constructor($title :string, $phone: string, $offers: Array<Offer>, $id: string, $name: string, $user: string, $password: string, $location: string, $email: string) {
        super();
        this.phone = $phone;
        this.offers = $offers;
    }


    /**
     * Getter $phone
     * @return {string}
     */
    public get $phone(): string {
        return this.phone;
    }

    /**
     * Getter $offers
     * @return {Array<Offer>}
     */
    public get $offers(): Array<Offer> {
        return this.offers;
    }

    /**
     * Setter $phone
     * @param {string} value
     */
    public set $phone(value: string) {
        this.phone = value;
    }

    /**
     * Setter $offers
     * @param {Array<Offer>} value
     */
    public set $offers(value: Array<Offer>) {
        this.offers = value;
    }

}

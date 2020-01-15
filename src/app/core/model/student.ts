class Student extends User {
    private demands: Array<Demand>;


    constructor($demands: Array<Demand>, $id: string, $name: string, $user: string, $password: string, $location: string, $email: string) {
        super($id, $name, $user, $password, $location, $email);
        this.demands = $demands;
    }


    /**
     * Getter $demands
     * @return {Array<Demand>}
     */
    public get $demands(): Array<Demand> {
        return this.demands;
    }

    /**
     * Setter $demands
     * @param {Array<Demand>} value
     */
    public set $demands(value: Array<Demand>) {
        this.demands = value;
    }


}
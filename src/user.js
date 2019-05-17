class User {

    constructor() {
        this.firstname = null;
        this.lastname = null;
    }

    setFirstName(firstname) {
        this.firstname = firstname;
    }

    setLastName(lastname) {
        this.lastname = lastname;
    }

    getFullName() {
        return this.firstname + ' ' + this.lastname;
    }
}

export default User
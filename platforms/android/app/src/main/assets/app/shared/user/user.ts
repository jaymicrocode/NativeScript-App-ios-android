// TypeScript class that does nothing more than define two properties—email and password
var validator = require("email-validator");

export class User {
    email: string;
    password: string;
    isValidEmail() {
        return validator.validate(this.email);
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript class that does nothing more than define two properties—email and password
var validator = require("email-validator");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3RkFBd0Y7QUFDeEYsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFM0M7SUFBQTtJQU1BLENBQUM7SUFIRywyQkFBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFR5cGVTY3JpcHQgY2xhc3MgdGhhdCBkb2VzIG5vdGhpbmcgbW9yZSB0aGFuIGRlZmluZSB0d28gcHJvcGVydGllc+KAlGVtYWlsIGFuZCBwYXNzd29yZFxudmFyIHZhbGlkYXRvciA9IHJlcXVpcmUoXCJlbWFpbC12YWxpZGF0b3JcIik7XG5cbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgaXNWYWxpZEVtYWlsKCkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuZW1haWwpO1xuICAgIH1cbn0iXX0=
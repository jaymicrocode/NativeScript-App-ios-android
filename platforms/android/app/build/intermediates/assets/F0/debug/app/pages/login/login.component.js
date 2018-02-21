"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
// access the <Page> UI element and make some changes to it.
var page_1 = require("ui/page");
// import the Color class from the NativeScript color module, 
// and the View class from the NativeScript view module.
var color_1 = require("color");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userserv, router, page) {
        this.userserv = userserv;
        this.router = router;
        this.page = page;
        // add a new isLogginIn property
        // This app uses the same UI for the “Sign In” form and the “Sign Up” form. 
        // Therefore, when the user taps “Sign Up”, we need to update the text of 
        // the buttons and eventually the functionality that occurs when you tap them
        this.isLoggingIn = true;
        this.user = new user_1.User();
        // hardcode your credentials in your AppComponent’s constructor()
        this.user.email = "user1@example.com";
        this.user.password = "password";
    }
    // ngOnInit gets invoked when Angular initializes this component.
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.submit = function () {
        // check the email validity
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
        // alert("You're using: " + this.user.email);
    };
    // get login() from the user.serice
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userserv.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userserv.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    // add a new toggleDisplay() method
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    __decorate([
        core_1.ViewChild("container"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            // The providers array is a simple list of all the Angular services 
            // that you need to use in your component
            providers: [user_service_1.UserService],
            templateUrl: "./pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router,
            page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUN6QywrQ0FBOEM7QUFDOUMsK0RBQTZEO0FBRTdELDREQUE0RDtBQUM1RCxnQ0FBK0I7QUFDL0IsOERBQThEO0FBQzlELHdEQUF3RDtBQUN4RCwrQkFBOEI7QUFXOUI7SUFxQkksd0JBQW9CLFFBQXFCLEVBQ3JCLE1BQWMsRUFDZCxJQUFVO1FBRlYsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVg5QixnQ0FBZ0M7UUFDaEMsNEVBQTRFO1FBQzVFLDBFQUEwRTtRQUMxRSw2RUFBNkU7UUFDN0UsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFTZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFFdkIsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUVwQyxDQUFDO0lBRUQsaUVBQWlFO0lBQ2pFLGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDakQsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSwyQkFBMkI7UUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBQ0QsNkNBQTZDO0lBQ2pELENBQUM7SUFFRCxtQ0FBbUM7SUFDbkMsOEJBQUssR0FBTDtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN6QixTQUFTLENBQ04sY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsRUFDckMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsK0NBQStDLENBQUMsRUFBdEQsQ0FBc0QsQ0FDcEUsQ0FBQztJQUNWLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzVCLFNBQVMsQ0FDTjtZQUNJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQ0QsY0FBTSxPQUFBLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxFQUE3RCxDQUE2RCxDQUN0RSxDQUFDO0lBQ1YsQ0FBQztJQUVELG1DQUFtQztJQUNuQyxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFckMsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNkLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDO1lBQzdFLFFBQVEsRUFBRSxHQUFHO1NBQ2hCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqRXVCO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDO2tDQUFZLGlCQUFVO3FEQUFDO0lBbkJyQyxjQUFjO1FBUjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixvRUFBb0U7WUFDcEUseUNBQXlDO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUN2RSxDQUFDO3lDQXNCZ0MsMEJBQVc7WUFDYixlQUFNO1lBQ1IsV0FBSTtPQXZCckIsY0FBYyxDQXNGMUI7SUFBRCxxQkFBQztDQUFBLEFBdEZELElBc0ZDO0FBdEZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuXG4vLyBhY2Nlc3MgdGhlIDxQYWdlPiBVSSBlbGVtZW50IGFuZCBtYWtlIHNvbWUgY2hhbmdlcyB0byBpdC5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuLy8gaW1wb3J0IHRoZSBDb2xvciBjbGFzcyBmcm9tIHRoZSBOYXRpdmVTY3JpcHQgY29sb3IgbW9kdWxlLCBcbi8vIGFuZCB0aGUgVmlldyBjbGFzcyBmcm9tIHRoZSBOYXRpdmVTY3JpcHQgdmlldyBtb2R1bGUuXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgLy8gVGhlIHByb3ZpZGVycyBhcnJheSBpcyBhIHNpbXBsZSBsaXN0IG9mIGFsbCB0aGUgQW5ndWxhciBzZXJ2aWNlcyBcbiAgICAvLyB0aGF0IHlvdSBuZWVkIHRvIHVzZSBpbiB5b3VyIGNvbXBvbmVudFxuICAgIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgLy8gWyhuZ01vZGVsKV09XCJlbWFpbFwiIGlzIGEgdHdvIHdheSBkYXRhIGJpbmRpbmcgd2l0aCBhbmd1bGFyIFxuICAgIC8vIFsobmdNb2RlbCldPVwiZW1haWxcIiBpcyBzaG9ydGhhbmQgZm9yIFt0ZXh0XT1cImVtYWlsXCIgKG5nTW9kZWxDaGFuZ2UpPVwiZW1haWw9JGV2ZW50XCIsIFxuICAgIC8vIHdoaWNoIGJpbmRzIHRoZSBlbWFpbCBlbGVtZW504oCZcyB0ZXh0IGF0dHJpYnV0ZSB0byBhbiBlbWFpbCBwcm9wZXJ0eSBhbmQgYWRkcyBhIGNoYW5nZVxuICAgIC8vIGV2ZW50IGhhbmRsZXIgdGhhdCB1cGRhdGVzIHRoZSBlbWFpbCBwcm9wZXJ0eeKAmXMgdmFsdWUgd2hlbmV2ZXIgdGhlIHVzZXIgbWFrZXMgYSBjaGFuZ2VcbiAgICAvLyBlbWFpbCA9IFwiZXhhbXBsZUB5YW5uLmNvbVwiXG5cbiAgICAvLyBzZXQgdGhlIHVzZXIgcHJvcGVydHkgZnJvbSBjaGljaCB3ZSBnZXQgdGhlIGVtYWlsIGFuZCBwYXNzb3JkIG5vdyBhbmQgdXBkYXRlIHRoZVxuICAgIC8vIHR3byB3YXkgZGF0YSBiaW5kaW5nIHRvIFsobmdNb2RlbCldPVwidXNlci5lbWFpbFwiIGFuZCBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIlxuICAgIHVzZXI6IFVzZXI7XG5cbiAgICAvLyBhZGQgYSBuZXcgaXNMb2dnaW5JbiBwcm9wZXJ0eVxuICAgIC8vIFRoaXMgYXBwIHVzZXMgdGhlIHNhbWUgVUkgZm9yIHRoZSDigJxTaWduIElu4oCdIGZvcm0gYW5kIHRoZSDigJxTaWduIFVw4oCdIGZvcm0uIFxuICAgIC8vIFRoZXJlZm9yZSwgd2hlbiB0aGUgdXNlciB0YXBzIOKAnFNpZ24gVXDigJ0sIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSB0ZXh0IG9mIFxuICAgIC8vIHRoZSBidXR0b25zIGFuZCBldmVudHVhbGx5IHRoZSBmdW5jdGlvbmFsaXR5IHRoYXQgb2NjdXJzIHdoZW4geW91IHRhcCB0aGVtXG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuXG4gICAgLy8gY3JlYXRlIGEgbmV3IHByb3BlcnR5IHRoYXQgcG9pbnRzIGF0IHRoZSA8U3RhY2tMYXlvdXQ+IGVsZW1lbnQuXG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJzZXJ2OiBVc2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSkge1xuXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG5cbiAgICAgICAgLy8gaGFyZGNvZGUgeW91ciBjcmVkZW50aWFscyBpbiB5b3VyIEFwcENvbXBvbmVudOKAmXMgY29uc3RydWN0b3IoKVxuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcInVzZXIxQGV4YW1wbGUuY29tXCI7XG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwicGFzc3dvcmRcIjtcblxuICAgIH1cblxuICAgIC8vIG5nT25Jbml0IGdldHMgaW52b2tlZCB3aGVuIEFuZ3VsYXIgaW5pdGlhbGl6ZXMgdGhpcyBjb21wb25lbnQuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19sb2dpblwiO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgLy8gY2hlY2sgdGhlIGVtYWlsIHZhbGlkaXR5XG4gICAgICAgIGlmICghdGhpcy51c2VyLmlzVmFsaWRFbWFpbCgpKSB7XG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhbGVydChcIllvdSdyZSB1c2luZzogXCIgKyB0aGlzLnVzZXIuZW1haWwpO1xuICAgIH1cblxuICAgIC8vIGdldCBsb2dpbigpIGZyb20gdGhlIHVzZXIuc2VyaWNlXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMudXNlcnNlcnYubG9naW4odGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSksXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaWduVXAoKSB7XG4gICAgICAgIHRoaXMudXNlcnNlcnYucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIGFkZCBhIG5ldyB0b2dnbGVEaXNwbGF5KCkgbWV0aG9kXG4gICAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuXG4gICAgICAgIGxldCBjb250YWluZXIgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb250YWluZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuaXNMb2dnaW5nSW4gPyBuZXcgQ29sb3IoXCJ3aGl0ZVwiKSA6IG5ldyBDb2xvcihcIiMzMDEyMTdcIiksXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgIH0pO1xuICAgIH1cblxufSJdfQ==
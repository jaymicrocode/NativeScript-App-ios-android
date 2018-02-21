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
var hint_util_1 = require("../../utils/hint-util");
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
        // this.user.email = "user1@example.com";
        // this.user.password = "password";
    }
    // ngOnInit gets invoked when Angular initializes this component.
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = this.page.ios ? "res://bg_login.jpg" : "res://bg_login";
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
        // call the setTextFieldColors()
        this.setTextFieldColors();
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("#999999") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    // function that Change hint colors on iOS
    LoginComponent.prototype.setTextFieldColors = function () {
        var emailTextField = this.email.nativeElement;
        var passwordTextField = this.password.nativeElement;
        var mainTextColor = new color_1.Color(this.isLoggingIn ? "black" : "black");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;
        var hintColor = new color_1.Color(this.isLoggingIn ? "black" : "black");
        hint_util_1.setHintColor({ view: emailTextField, color: hintColor });
        hint_util_1.setHintColor({ view: passwordTextField, color: hintColor });
    };
    __decorate([
        core_1.ViewChild("container"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("email"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUN6QywrQ0FBOEM7QUFDOUMsK0RBQTZEO0FBRTdELDREQUE0RDtBQUM1RCxnQ0FBK0I7QUFDL0IsOERBQThEO0FBQzlELHdEQUF3RDtBQUN4RCwrQkFBOEI7QUFHOUIsbURBQXFEO0FBV3JEO0lBMEJJLHdCQUFvQixRQUFxQixFQUNyQixNQUFjLEVBQ2QsSUFBVTtRQUZWLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQU07UUFoQjlCLGdDQUFnQztRQUNoQyw0RUFBNEU7UUFDNUUsMEVBQTBFO1FBQzFFLDZFQUE2RTtRQUM3RSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQWNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUV2QixpRUFBaUU7UUFDakUseUNBQXlDO1FBQ3pDLG1DQUFtQztJQUV2QyxDQUFDO0lBRUQsaUVBQWlFO0lBQ2pFLGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN4RixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLDJCQUEyQjtRQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxF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QUFRO1lBQ2xCLG9FQUFvRTtZQUNwRSx5Q0FBeUM7WUFDekMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3ZFLENBQUM7eUNBMkJnQywwQkFBVztZQUNiLGVBQU07WUFDUixXQUFJO09BNUJyQixjQUFjLENBNEcxQjtJQUFELHFCQUFDO0NBQUEsQUE1R0QsSUE0R0M7QUE1R1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5cbi8vIGFjY2VzcyB0aGUgPFBhZ2U+IFVJIGVsZW1lbnQgYW5kIG1ha2Ugc29tZSBjaGFuZ2VzIHRvIGl0LlxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG4vLyBpbXBvcnQgdGhlIENvbG9yIGNsYXNzIGZyb20gdGhlIE5hdGl2ZVNjcmlwdCBjb2xvciBtb2R1bGUsIFxuLy8gYW5kIHRoZSBWaWV3IGNsYXNzIGZyb20gdGhlIE5hdGl2ZVNjcmlwdCB2aWV3IG1vZHVsZS5cbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuXG5pbXBvcnQgeyBzZXRIaW50Q29sb3IgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaGludC11dGlsXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgICAvLyBUaGUgcHJvdmlkZXJzIGFycmF5IGlzIGEgc2ltcGxlIGxpc3Qgb2YgYWxsIHRoZSBBbmd1bGFyIHNlcnZpY2VzIFxuICAgIC8vIHRoYXQgeW91IG5lZWQgdG8gdXNlIGluIHlvdXIgY29tcG9uZW50XG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvLyBbKG5nTW9kZWwpXT1cImVtYWlsXCIgaXMgYSB0d28gd2F5IGRhdGEgYmluZGluZyB3aXRoIGFuZ3VsYXIgXG4gICAgLy8gWyhuZ01vZGVsKV09XCJlbWFpbFwiIGlzIHNob3J0aGFuZCBmb3IgW3RleHRdPVwiZW1haWxcIiAobmdNb2RlbENoYW5nZSk9XCJlbWFpbD0kZXZlbnRcIiwgXG4gICAgLy8gd2hpY2ggYmluZHMgdGhlIGVtYWlsIGVsZW1lbnTigJlzIHRleHQgYXR0cmlidXRlIHRvIGFuIGVtYWlsIHByb3BlcnR5IGFuZCBhZGRzIGEgY2hhbmdlXG4gICAgLy8gZXZlbnQgaGFuZGxlciB0aGF0IHVwZGF0ZXMgdGhlIGVtYWlsIHByb3BlcnR54oCZcyB2YWx1ZSB3aGVuZXZlciB0aGUgdXNlciBtYWtlcyBhIGNoYW5nZVxuICAgIC8vIGVtYWlsID0gXCJleGFtcGxlQHlhbm4uY29tXCJcblxuICAgIC8vIHNldCB0aGUgdXNlciBwcm9wZXJ0eSBmcm9tIGNoaWNoIHdlIGdldCB0aGUgZW1haWwgYW5kIHBhc3NvcmQgbm93IGFuZCB1cGRhdGUgdGhlXG4gICAgLy8gdHdvIHdheSBkYXRhIGJpbmRpbmcgdG8gWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCIgYW5kIFsobmdNb2RlbCldPVwidXNlci5wYXNzd29yZFwiXG4gICAgdXNlcjogVXNlcjtcblxuICAgIC8vIGFkZCBhIG5ldyBpc0xvZ2dpbkluIHByb3BlcnR5XG4gICAgLy8gVGhpcyBhcHAgdXNlcyB0aGUgc2FtZSBVSSBmb3IgdGhlIOKAnFNpZ24gSW7igJ0gZm9ybSBhbmQgdGhlIOKAnFNpZ24gVXDigJ0gZm9ybS4gXG4gICAgLy8gVGhlcmVmb3JlLCB3aGVuIHRoZSB1c2VyIHRhcHMg4oCcU2lnbiBVcOKAnSwgd2UgbmVlZCB0byB1cGRhdGUgdGhlIHRleHQgb2YgXG4gICAgLy8gdGhlIGJ1dHRvbnMgYW5kIGV2ZW50dWFsbHkgdGhlIGZ1bmN0aW9uYWxpdHkgdGhhdCBvY2N1cnMgd2hlbiB5b3UgdGFwIHRoZW1cbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XG5cbiAgICAvLyBjcmVhdGUgYSBuZXcgcHJvcGVydHkgdGhhdCBwb2ludHMgYXQgdGhlIDxTdGFja0xheW91dD4sIGVtYWlsIGFuZCBwYXNzd29yZCBlbGVtZW50LlxuICAgIC8vIDxTdGFja0xheW91dCAjY29udGFpbmVyPiBpbiBsb2dpbi5odG1sXG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgLy8gPFRleHRGaWVsZCAjZW1haWwgaW4gbG9naW4uaHRtbFxuICAgIEBWaWV3Q2hpbGQoXCJlbWFpbFwiKSBlbWFpbDogRWxlbWVudFJlZjtcbiAgICAvLyA8VGV4dEZpZWxkICNwYXNzd29yZCBpbiBsb2dpbi5odG1sXG4gICAgQFZpZXdDaGlsZChcInBhc3N3b3JkXCIpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2Vyc2VydjogVXNlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcblxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuXG4gICAgICAgIC8vIGhhcmRjb2RlIHlvdXIgY3JlZGVudGlhbHMgaW4geW91ciBBcHBDb21wb25lbnTigJlzIGNvbnN0cnVjdG9yKClcbiAgICAgICAgLy8gdGhpcy51c2VyLmVtYWlsID0gXCJ1c2VyMUBleGFtcGxlLmNvbVwiO1xuICAgICAgICAvLyB0aGlzLnVzZXIucGFzc3dvcmQgPSBcInBhc3N3b3JkXCI7XG5cbiAgICB9XG5cbiAgICAvLyBuZ09uSW5pdCBnZXRzIGludm9rZWQgd2hlbiBBbmd1bGFyIGluaXRpYWxpemVzIHRoaXMgY29tcG9uZW50LlxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IHRoaXMucGFnZS5pb3MgPyBcInJlczovL2JnX2xvZ2luLmpwZ1wiIDogXCJyZXM6Ly9iZ19sb2dpblwiO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgLy8gY2hlY2sgdGhlIGVtYWlsIHZhbGlkaXR5XG4gICAgICAgIGlmICghdGhpcy51c2VyLmlzVmFsaWRFbWFpbCgpKSB7XG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhbGVydChcIllvdSdyZSB1c2luZzogXCIgKyB0aGlzLnVzZXIuZW1haWwpO1xuICAgIH1cblxuICAgIC8vIGdldCBsb2dpbigpIGZyb20gdGhlIHVzZXIuc2VyaWNlXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMudXNlcnNlcnYubG9naW4odGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSksXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaWduVXAoKSB7XG4gICAgICAgIHRoaXMudXNlcnNlcnYucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIGFkZCBhIG5ldyB0b2dnbGVEaXNwbGF5KCkgbWV0aG9kXG4gICAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuXG4gICAgICAgIC8vIGNhbGwgdGhlIHNldFRleHRGaWVsZENvbG9ycygpXG4gICAgICAgIHRoaXMuc2V0VGV4dEZpZWxkQ29sb3JzKCk7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IDxWaWV3PnRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnRhaW5lci5hbmltYXRlKHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc0xvZ2dpbmdJbiA/IG5ldyBDb2xvcihcIiM5OTk5OTlcIikgOiBuZXcgQ29sb3IoXCIjMzAxMjE3XCIpLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiB0aGF0IENoYW5nZSBoaW50IGNvbG9ycyBvbiBpT1NcbiAgICBzZXRUZXh0RmllbGRDb2xvcnMoKSB7XG4gICAgICAgIGxldCBlbWFpbFRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5lbWFpbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgcGFzc3dvcmRUZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBsZXQgbWFpblRleHRDb2xvciA9IG5ldyBDb2xvcih0aGlzLmlzTG9nZ2luZ0luID8gXCJibGFja1wiIDogXCJibGFja1wiKTtcbiAgICAgICAgZW1haWxUZXh0RmllbGQuY29sb3IgPSBtYWluVGV4dENvbG9yO1xuICAgICAgICBwYXNzd29yZFRleHRGaWVsZC5jb2xvciA9IG1haW5UZXh0Q29sb3I7XG5cbiAgICAgICAgbGV0IGhpbnRDb2xvciA9IG5ldyBDb2xvcih0aGlzLmlzTG9nZ2luZ0luID8gXCJibGFja1wiIDogXCJibGFja1wiKTtcbiAgICAgICAgc2V0SGludENvbG9yKHsgdmlldzogZW1haWxUZXh0RmllbGQsIGNvbG9yOiBoaW50Q29sb3IgfSk7XG4gICAgICAgIHNldEhpbnRDb2xvcih7IHZpZXc6IHBhc3N3b3JkVGV4dEZpZWxkLCBjb2xvcjogaGludENvbG9yIH0pO1xuICAgIH1cblxufSJdfQ==
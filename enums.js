// Easy way to define a group of constants
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthroized";
    LoginError["NoUser"] = "nouser";
    LoginError["WrongCrendentials"] = "wrongcredentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
var printErrorMsg = function (error) {
    if (error == LoginError.Unauthorized) {
        console.log("User not authorized");
    }
    else if (error == LoginError.NoUser) {
        console.log("No user found with that username");
    }
    else if (error == LoginError.WrongCrendentials) {
        console.log("Wrong username/password combination");
    }
    else {
        console.log("Internal Error.");
    }
};
printErrorMsg(LoginError.NoUser);
console.log(LoginError);

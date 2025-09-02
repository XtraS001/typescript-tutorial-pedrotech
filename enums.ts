// Easy way to define a group of constants

enum LoginError {
    Unauthorized = "unauthroized",
    NoUser = "nouser",
    WrongCrendentials = "wrongcredentials",
    Internal = "internal",
}

const printErrorMsg = (error: LoginError) => {
    if (error == LoginError.Unauthorized) {
        console.log("User not authorized");
    } else if (error == LoginError.NoUser) {
        console.log("No user found with that username");
    } else if (error == LoginError.WrongCrendentials) {
        console.log("Wrong username/password combination");
    } else {
        console.log("Internal Error.");
    }
};

printErrorMsg(LoginError.NoUser);
console.log(LoginError);
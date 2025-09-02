// Interface is road map or blue print how object should look like

interface UserInterface {
    id: number;
    name: string;
    age?: number;   // age is number or undefined

    greet(message:string): void;
}

const User: UserInterface = {
    id: 2,
    name: "John",

    greet(message) {
        console.log(message);
    }
};

if (!User.age){
    console.log("No age of the user");
} else {
    console.log(User.age)
}

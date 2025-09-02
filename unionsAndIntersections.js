// // Unions (or) Can only be one type
var signContract = function (employee) {
    console.log("Contract signed by " + employee.name + "with email: " + employee.email + "and credit score: " + employee.creditScore);
};
signContract({
    name: "Pedro",
    creditScore: 800,
    id: 34,
    email: "pedro@gmail.com",
});

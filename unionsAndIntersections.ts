// // Unions (or) Can only be one type

// type IDFieldType = string | number; // Create a union type for a field

// // const printID = (id : string | number) => {  // Use union type
// const printID = (id : IDFieldType) => {
//     console.log("ID " + id);
// }

// printID(12332452324);

// Intersections

interface BusinessPartner {
  name: string;
  creditScore: number;
}

interface UserIdentity {
  id: number;
  email: String;
}

type Employee = BusinessPartner & UserIdentity; // Intersection type(and) Include all properties of both

const signContract = (employee: Employee): void => {
  console.log(
    "Contract signed by " +
      employee.name +
      "with email: " +
      employee.email +
      " and credit score: " +
      employee.creditScore
  );
};

signContract({
  name: "Pedro",
  creditScore: 800,
  id: 34,
  email: "pedro@gmail.com",
});

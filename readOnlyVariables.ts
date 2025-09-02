interface Employee {
  readonly employeeId: number;
  readonly startDate: Date;

  name: string;
  department: string;
}

const employee: Employee = {
  employeeId: 123,
  startDate: new Date(),
  name: "Pedro",
  department: "Development",
};

employee.name = "John";
// employee.employeeId = 234; // This line will throw error because this variable is readonly

console.log(employee);

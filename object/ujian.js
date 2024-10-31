const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
function addEmployee(name, email, joinYear) {

const newEmployee = {
    name,
    email,
    joinYear,
};
    employees.push(newEmployee);
};

addEmployee('achmad', 'achmad@dicoding.com', 2020);
console.log(employees);
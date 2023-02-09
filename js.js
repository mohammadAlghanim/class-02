'use strict';
function Employee(id, fullName, department, level, imageUrl, salary) {
  this.id = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageUrl = imageUrl;
  this.salary = salary;
}

// Prototype function for calculating the salary
Employee.prototype.calculateSalary = function() {
  let min, max;
  switch (this.level) {
      case 'Senior':
          min = 1500;
          max = 2000;
          break;
      case 'Mid-Senior':
          min = 1000;
          max = 1500;
          break;
      case 'Junior':
          min = 500;
          max = 1000;
          break;
      default:
          min = 0;
          max = 0;
          break;
  }
  this.salary = Math.floor(Math.random() * (max - min + 1)) + min;
  this.netSalary = this.salary * (1 - 0.075);
}


Employee.prototype.render = function() {
  document.write(`<h5>Name: ${this.fullName}</h5> department: ${this.department}&nbsp level:${this.level}&nbsp Salary: ${this.salary}  imageUrl:<img src= + ${this.imageUrl} + >`);
}

let employees = [
  new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', '', 0),
  new Employee(1001, 'Lana Ali', 'Finance', 'Senior', '', 0),
  new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', '', 0),
  new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', '', 0),
  new Employee(1004, 'Omar Zaid', 'Development', 'Senior', '', 0),
  new Employee(1005, 'Rana Saleh', 'Development', 'Junior', '', 0),
  new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', '', 0)
];

for (let i = 0; i < employees.length; i++) {
  employees[i].calculateSalary();
  employees[i].render();
}
// Exercise 1: Traditional Function
function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + ". Your monthly Salary is " + Salary);
  }
  console.log("This is my first program");
  var EmpName = "John";
  var EmpSalary = 50000;
  // Calling EmployeeInfo function
  EmployeeInfo(EmpName, EmpSalary);
  
  // Exercise 2: Arrow Function
  const EmpSkills = (skills) => {
    console.log("Expert in " + skills);
  };
  EmpSkills("Java");
  
  // Exercise 3: Importing Local Modules
  const student = require('./StudentInfo');
  const Person = require('./Person');
  
  // Using functions and variables from StudentInfo.js
  console.log("Student Name: " + student.getName());
  console.log("Campus: " + student.Location());
  console.log("Date of Birth: " + student.dob);
  console.log("Grade: " + student.Studentgrade(55));
  
  // Creating a new instance of the Person class from Person.js
  const person1 = new Person("Jim", 25, "myemail@gmail.com");
  console.log("Using Person Module: " + person1.getPersonInfo());
  
  // Exercise 4: Using Node.js Core Module (os)
  const os = require("os");
  const util = require("util");
  console.log("Temporary Directory: " + os.tmpdir());
  console.log("Hostname: " + os.hostname());
  console.log("OS: " + os.platform() + " Release: " + os.release());
  console.log("Uptime: " + (os.uptime() / 3600).toFixed(2) + " hours");
  console.log("User Info: " + util.inspect(os.userInfo()));
  console.log("Memory: " + (os.totalmem() / 1e9).toFixed(2) + " GB");
  console.log("Free Memory: " + (os.freemem() / 1e9).toFixed(2) + " GB");
  console.log("CPU Details: " + util.inspect(os.cpus()));
  console.log("Network: " + util.inspect(os.networkInterfaces()));
  console.log("Program Ended");
  
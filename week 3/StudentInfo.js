// Variables and arrow functions
const dateofBirth = "12/12/1980";
const getStudentName = () => {
  return "John Doe";
};
const getCampusName = () => {
  return "UEL Campus";
};

// Exporting functions and variables
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

// Exporting a function with parameters
exports.Studentgrade = (marks) => {
  if (marks > 50 && marks < 70) return "B Grade";
  else if (marks >= 70) return "A Grade";
  else return "Fail";
};

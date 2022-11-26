// Write your solution in this file!
const employee = {
  name: "Kurt",
  streetAddress: "1 Bridge Road",
};

// ===> This function should not mutate the employee;
// it should return a new Object that has an updated value
// for the key passed in.
//
// function updateEmployeeWithKeyAndValue(employee, key, value) {
//   return { ...employee, ...{ [key]: value } };
//   //   return Object.assign({}, employee, { [key]: value });
// }

// const newObject = updateEmployeeWithKeyAndValue(
//   employee,
//   "streetAddress",
//   "970 Carlos Gomes"
// );
// console.log(employee);
// console.log(newObject);

// ===> same as previous function but destructive
//
// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//   employee[key] = value;
// //   return employee;
// }

// console.log(employee);
// destructivelyUpdateEmployeeWithKeyAndValue(
//   employee,
//   "streetAddress",
//   "970 Carlos Gomes"
// );
// console.log(employee);

// ===> It should delete the property with that key
// from the employee Object. This should not mutate the original
//
function deleteFromEmployeeByKey(employee, key) {
  const newObj = { ...employee };
  //   const newObj = Object.assign({}, employee);
  delete newObj[key];
  return newObj;
}
console.log(deleteFromEmployeeByKey(employee, "name"));
console.log(employee);

// ===> same as previous function but destructive
//
// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//   delete employee[key];
//   //   return employee;
// }

// console.log(employee);
// destructivelyDeleteFromEmployeeByKey(employee, "name");
// console.log(employee);

const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
let allPeople = [...techupPeople, ...techcoolPeople];
console.log(allPeople); 

function checkAge(person) {
  return person.age <= 20;
}
let filterAge = allPeople.filter(checkAge);
console.log(filterAge);


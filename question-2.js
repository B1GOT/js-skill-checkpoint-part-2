const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
function checkScore(student) {
  return student.score >= 50;
}

let filterScore = students.filter(checkScore);
console.log(filterScore); 

let addScore =  filterScore => filterScore.map((student) => student.score * 1.1);
console.log(addScore(filterScore));

let totalScore = addScore(filterScore).reduce((acc, cur) => acc + cur, 0);
console.log(totalScore);

// const totalScore = students.filter((student) => student.score > 50)
//   .map((student) => student.score * 1.1)
//   .reduce((acc, cur) => acc + cur.score, 0);

// console.log(`Total score is ${totalScore}`);
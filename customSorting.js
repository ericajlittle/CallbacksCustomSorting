// var array = [10, 2, 5, 1, 9];

// var sortedArr = array.sort(function(a,b){
//     return a - b
// })
// console.log(sortedArr);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
var studentSorter = students.sort(function(a, b){
  var nameA = a.name
  var nameB = b.name
  var ageA = a.age
  var ageB = b.age
  if  (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
return (ageB - ageA);
});
console.log(studentSorter);
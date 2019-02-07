var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 89 },
  { id: 4, name: "alex",     age: 700 }
];


students.sort( function(a, b) {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  if(nameA > nameB) {
    return 1;
  } else if (nameA < nameB) {
    return -1;
  }
  return a.age - b.age;
});

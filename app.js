const movie = {
  title: "Interstellar",
  year: 2014,
  director: "Christopher Nolan",
  rating: "PG-13",
  runtime: 169,
  watched:true
};
console.log(movie.title)
console.log(movie.director)
if (movie.runtime>169)
console.log("True")
else console.log("False")
console.log (Object.keys(movie))
console.log(Object.values(movie))
function createStudent(name,grade,gpa) {
  return {
    name: name,
    grade:grade,
    gpa: gpa, 
    IsHonors:gpa>=3.5
  }

}
console.log(createStudent("Alex", 11, 3.7));
console.log(createStudent("Alex", 11, 2.7));
function findByName(students, targetName) {
   students= [
  { name:"ChenZee", grade:12,gpa:3.5,IsHonors:false}
  ]
  targetName=
  
}



 
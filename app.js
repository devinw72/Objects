/* const movie = {
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

} */
/* function printRoster(students) {
students= [
]
}
students.forEach(function(printRoster) {
  console.log (student.objects)
});
students= [
{ name: "Jane", gpa:3.8},
{ name:"ChenZee",gpa:3.5},
{ name:"Dakota",gpa: 3.9
  }
] */

items= [
{name:"Rabbit",price:39.00,category:"mammal"},
{name:"Axolotl",price:150.00,category:"amphibian"},
{name:"Salamander",price:45.00,category:"amphibian"},
{name:"Cat",price:30.00,category:"mammal"},
{name:"Dog",price:30.00,category:"mammal"},
{name:"Owl",price:250.00,category:"bird"},
{name:"MockingBird",price:330.00,category:"bird"},
{name:"Turkey",price:60.00,category:"bird"},
{name:"Parakeets",price:30.00,category:"bird"},
{name:"Hamster",price:25.00,category:"rodent"},
{name:"Squirrel",price:150.00,category:"rodent"},
{name:"Parrot",price:60.00,category:"bird"},
{name:"Goldfish",price:25.00,category:"fish"},
{name:"SeaHorse",price:30.00,category:"fish"},
{name:"Turtle",price:60.00,category:"reptile"},
{name:"Gecko",price:45.00,category:"reptile"},
{name:"Bearded Dragon",price:80.00,category:"reptile"},
{name:"Fennec Fox",price:800.00,category:"mammal"},
{name:"Sugar Gliders",price:300.00,category:"mammal"},
{name:"Frog",price:45.00,category:"amphibian"}
]
const amphibians=items.filter(items=>items.category==="amphibian")
console.log(amphibians)
const reptiles=items.filter(items=>items.category==="reptile")
console.log(reptiles)
const mammals=items.filter(items=>items.category==="mammal")
console.log(mammals)
const birds=items.filter(items=>items.category==="bird")
console.log(birds)
const rodents=items.filter(items=>items.category==="rodent")
console.log(rodents)
const fishs=items.filter(items=>items.category==="fish")
console.log(fishs)
function cart() {
  let cart=[];
  return{
  addItem: function (item) {
  cart.push(item);
  console.log(`${item} added to the cart.`);
  },
  removeItem: function(item) {
    cart.splice(item);
  },
  viewCart: function(item) {
    if (cart.length===0)
      console.log ("The cart is empty")
    else {
      console.log("The cart contains:",cart.join"")
    }
  }
  }
}
const mycart=cart();
mycart.addItem("balloon")
mycart.removeItem("balloon")



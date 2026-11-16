items=[
{name:"Rabbit",price:40.00,category:"Mammal",img:"images.jpg"},
{name:"Axolotl",price:150.00,category:"Amphibian",img:"Axolotls.webp"},
{name:"Salamander",price:45.00,category:"Amphibian",img:"images.webp"},
{name:"Cat",price:30.00,category:"Mammal",img:"cat.jpg"},
{name:"Dog",price:30.00,category:"Mammal",img:"puppy.webp"},
{name:"Owl",price:250.00,category:"Bird",img:"owl.jpg"},
{name:"MockingBird",price:330.00,category:"Bird",img:"mocking.webp"},
{name:"Turkey",price:60.00,category:"Bird",img:"turkey.jpg"},
{name:"Parakeets",price:30.00,category:"Bird",img:"i.webp"},
{name:"Hamster",price:25.00,category:"Rodent",img:"h.webp"},
{name:"Squirrel",price:150.00,category:"Rodent",img:"s.avif"},
{name:"Parrot",price:60.00,category:"Bird",img:"p.jpg"},
{name:"Goldfish",price:25.00,category:"Fish",img:"g.jpg"},
{name:"SeaHorse",price:30.00,category:"Fish",img:"s.jpg"},
{name:"Turtle",price:60.00,category:"Reptile",img:"t.webp"},
{name:"Gecko",price:45.00,category:"Reptile",img:"ge.jpg"},
{name:"Bearded Dragon",price:80.00,category:"Reptile",img:"b.jpg"},
{name:"Fennec Fox",price:800.00,category:"Mammal",img:"f.webp"},
{name:"Sugar Gliders",price:300.00,category:"Mammal",img:"su.avif"},
{name:"Frog",price:45.00,category:"Amphibian",img:"fr.jpg"}
]
const amphibians=items.filter(items=>items.category==="Amphibian")
console.log(amphibians)
const reptiles=items.filter(items=>items.category==="Reptile")
console.log(reptiles)
const mammals=items.filter(items=>items.category==="Mammal")
console.log(mammals)
const birds=items.filter(items=>items.category==="Bird")
console.log(birds)
const rodents=items.filter(items=>items.category==="Rodent")
console.log(rodents)
const fishs=items.filter(items=>items.category==="Fish")
console.log(fishs)

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h2 class="card-header">${item.name}</h2>
    <p>Price:$${item.price.toFixed(2)}</p> 
    <p>Category of Animal:${item.category}</p> 
    <img class="img" src="${item.img}" alt="${item.name}">
    <button>Add to Cart</button>
</div>`
);
}
items.forEach(item => {
    inject(item);
})

let shoppingCart=[];
const container=document.querySelector(".container");
const cartContainer=document.querySelector(".cart-container");
const total=document.querySelector("#total")
function displayProducts(items) {
  container.innerHTML="";
  items.forEach(inject);
}
const buttons=document.querySelectorAll(".add-btn");
buttons.forEach(function(button,index){
button.addEventListener("click",function(){
addItem(items[index]);
});
});
function filterProducts(category) {
  if (category="All") {
    displayProducts(items);
  }
  else {
    const filteredProducts=products.filter(function(product){
return product.category===category;
});
displayProducts(filteredProducts);
}
}
const filterButtons=document.querySelectorAll(".btn");
filterButtons.forEach(function(button){
  button.addEventListener("click",function(){
filterProducts(button.textContent)
  });
});
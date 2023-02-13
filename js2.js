'use strict';

/*function Drink(name,ingre,imgPath,isCold,isHot){
    this.name=name;
    this.ingre=ingre;
    this.imgPath=imgPath;
    this.isCold=isCold;
    this.isHot=isHot;
    this.price=0;
}

Drink.prototype.claculatPrice = function(min,max){
    this.price= getRandomInt(min,max);
}

function getRandomInt(min,max){
    return Math.floor(Math.random()*max);
}


Drink.prototype.render = function(){
 //const test = document.getElementsByTagName('section');
 //console.log(test);
 
    const container = document.getElementById('DDDDD');
 console.log(container);

   const divEl= document.createElement('div')
   container.appendChild(divEl);

   const drinkName =document.createElement('h4');
   divEl.appendChild(drinkName);
   drinkName.textContent = this.name;

   const ing= document.createElement('p');
    divEl.appendChild(ing);
    ing.textContent= this.ingre; 

    const priceE1 =document.createElement('h1');
    divEl.appendChild(priceE1);
    priceE1.textContent = this.price;

    const img = document.createElement('img');
    divEl.appendChild(img);
    img.setAttribute('src',this.imgPath);
    img.width="";
    img.height="";

    const pEl = document.createElement('p');
    divEl.appendChild(pEl);
    if(this.isCold && this.isHot){
        pEl.textContent = `${this.name} is hot and col`;
    }else if(this.isCold){
       pEl.textContent =`${this.name} is cold`;
    }else {
        pEl.textContent =`${this.name} is hot`;
    }
    
    const ulE1 =document.createElement('ul');
    divEl.appendChild(ulE1);
    ulE1.textContent= "ingre";


     const ingArr =this.ingre.split(',');
       for(let i= 0;i< ingArr.length;i++){
        const liE1= document.createElement('li');
        ulE1.appendChild(liE1);
        liE1.textContent = ingArr[i];
       }



}

/*let newDrink = new Drink("latte","milk,water","https://www.bmw-me.com/content/dam/bmw/common/home/teaser/bmw-3-series-sedan-m-automobiles-hometeaser-1680x756.jpg.asset.1627481367711.jpg",true,true);
newDrink.claculatPrice(1,5);
newDrink.render();

let newDrink2 = new Drink("espresso","coffee,water","",true,true);
newDrink2.claculatPrice(1,5);
newDrink2.render();

let drinkForm =document.getElementById("drinkForm");
drinkForm.addEventListener('submit',addNewDrinkHandler);

function addNewDrinkHandler(event){
    event.preventDefault();
    console.log(event);
    let drinkName =event.target.name.value;
    let ingread =event.target.Ingreadients.value;
    let img =event.target.imgUrl.value;
    let isCold =event.target.isCold.checked;
    let isHot =event.target.isHot.checked;
    
    let newDrink = new Drink(drinkName,ingread,img,isCold,isHot);
    newDrink.claculatPrice(1,10);
    newDrink.render();

}*/
// Employee class
class Employee {
    constructor(fullName, department, level, imageUrl, id) {
      this.fullName = fullName;
      this.department = department;
      this.level = level;
      this.imageUrl = imageUrl;
      this.id = id;
    }
  
    // Render prototype function
    render() {
      const container = document.getElementById("employeeContainer");
      
      const card = document.createElement("div");
      card.classList.add("employee-card");
      container.appendChild(card);
      
  
      const image = document.createElement("img");
      image.src = this.imageUrl;
      image.alt = `src,${this.fullName}'s photo`;
      card.appendChild(image);
  
      const name = document.createElement("h4");
      name.textContent = this.fullName;
      card.appendChild(name);
  
      const department = document.createElement("p");
      department.textContent = `Department: ${this.department}`;
      card.appendChild(department);
  
      const level = document.createElement("p");
      level.textContent = `Level: ${this.level}`;
      card.appendChild(level);
  
      const id = document.createElement("p");
      id.textContent = `ID: ${this.id}`;
      card.appendChild(id);
    }
  }
  
  // Function for generating unique four digits employee id number
  function generateEmployeeId() {
    return Math.floor(1000 + Math.random() * 9000);
  }
  
  // Event listener for getting data from form
  let form = document.getElementById("employeeForm");
  form.addEventListener('submit', newHE);
  function newHE(event){
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const department = event.target.department.value;
    const level = event.target.level.value;
    const imageUrl = event.target.imageUrl.value;
    const id = generateEmployeeId();
    
    const employee = new Employee(fullName, department, level,imageUrl, id);
    employee.render();
  }
  
  
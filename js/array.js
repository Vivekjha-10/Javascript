//let heroes = ["ironman", "spiderman", "thor", "saktiman", "hulk" ];
// for Loop
// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i].toUpperCase());
// }

// for of Loop
// for (let hero of heroes) {
//     console.group(hero)
// }

// let cities =["delhi", "mumbai", "pune", "nashik"];

// for(let city of cities) {
//     console.log(city.toUpperCase());
// }




// ????????????????????????  Practics set   ???????????????????????
  // Ex : 1 
// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let i = 0; i < marks.length; i++) {
//    sum += marks[i]; 
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`)

// Ex: 2

// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items){

//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`)

//     i++;
// }

// for loop 
//   for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
//   }

//   console.log("after offer prices",items);


// Ex : 3

let companies = ["Bloomberg", "Microsoft", "uber", "Google", "IBM", "Netflix"];
console.log(companies);

companies.splice(2,1,"Ola");

companies.push("Amazon");



// ?????????????????????????????? Array Method ??????????????????????????????????
// 1. push() : add to end
// 2. Pop() : delete from end & return
// 3. toString() : convert array to string 
// 4. Concat() : To joins multiple array & return result
// 5. unShift() : add to start
// 6. shift() : delete from start and return
// 7. slice() : return a piece of array
//     slice( startIdx, endIdx )
// 8. splice() : change original array (add,remove,replace)
//      splice( startIdx, delCount, newEl1... )

// let fooditems = ["patato", "apple", "litchi", "tomato"];

// fooditems.push("chips", "burger", "paneer");
// let deletedItem = fooditems.pop();
// console.log(deletedItem)
// console.log(fooditems.toString());

// let marvelHeroes = ["thor", "spider", "ironman", "antman"];
// let dcHeroes = ["superman", "batman"];

// let heroes = marvelHeroes.concat(dcHeroes)
// console.log('heroes =', heroes)

// marvelHeroes.unshift("antman");
// console.log(marvelHeroes)

// marvelHeroes.shift();
// console.log(marvelHeroes)

// console.log(marvelHeroes)
// console.log(marvelHeroes.slice(0,3))


// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr)
// arr.splice(2, 2, 101, 102)

// add Element
// arr.splice(2, 0, 101)

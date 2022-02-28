// let fruits = ["apple", "banana", "qiwi", "peach",]

// fruits.forEach((item) => {
//    console.log(item)
// });

// let fruits = ["apple", "banana", false, 13, "hello", ["1", "2", "3"], {name: "Petter", lastname: "Parker"}, 12345]

// fruits.forEach((item=> {
//    console.log(typeof(item));
// }))


let people = [
   {
      name: "Peter",
      lastname: "Parker",
      age: 34
   },
   {
      name: "Lasley",
      lastname:"Johnson",
      age: 55
   },
   {
      name: "Sam",
      lastname:"Cruz",
      age: 11
   },
   {
      name: "Sadyr",
      lastname:"Japarov",
      age: 44
   },
   {
      name: "Elon",
      lastname:"Mask",
      age: 51
   },
]

let container = document.querySelector("#container")

people.forEach(item=>{
   let person = document.createElement("div");
   let name = `${item.name}, `;
   let lastname = `${item.name}, `;
   let age = item.age;
   person.append(name);
   person.append(lastname);
   person.append(age);
   person.append(person);

})
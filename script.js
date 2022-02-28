// let fruits = ["apple", "banana", "qiwi", "peach",]

// fruits.forEach((item) => {
//    console.log(item)
// });

// let fruits = ["apple", "banana", false, 13, "hello", ["1", "2", "3"], {name: "Petter", lastname: "Parker"}, 12345]

// fruits.forEach((item=> {
//    console.log(typeof(item));
// }))


let company = [
   {
      name: "Peter",
      resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat, consequatur magnam neque totam facere eligendi aliquam aliquid aspernatur deserunt itaque quia impedit odit blanditiis perferendis! Officiis aspernatur ipsam magnam?",
      profession: "front-end"
   },
   {
      name: "Lasley",
      resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat, consequatur magnam neque totam facere eligendi aliquam aliquid aspernatur deserunt itaque quia impedit odit blanditiis perferendis! Officiis aspernatur ipsam magnam?",
      profession: "java"
   },
   {
      name: "Sam",
      resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat, consequatur magnam neque totam facere eligendi aliquam aliquid aspernatur deserunt itaque quia impedit odit blanditiis perferendis! Officiis aspernatur ipsam magnam?",
      profession: "3D model"
   },
]

let container = document.querySelector("#container")

company.forEach(item=>{
   let company = document.createElement("div");
   let name = `${item.name}, `;
   let resume = `${item.resume}, `;
   let profession = item.profession;
   person.append(name);
   person.append(resume);
   person.append(profession);
})


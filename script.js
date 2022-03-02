// let fruits = ["apple", "banana", "qiwi", "peach",]

// fruits.forEach((item) => {
//    console.log(item)
// });

// let fruits = ["apple", "banana", false, 13, "hello", ["1", "2", "3"], {name: "Petter", lastname: "Parker"}, 12345]

// fruits.forEach((item=> {
//    console.log(typeof(item));
// }))

// let company = [
//    {
//       name: "Ivan",
//       age: "22",
//       resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat, consequatur magnam neque totam facere eligendi aliquam aliquid aspernatur deserunt itaque quia impedit odit blanditiis perferendis! Officiis aspernatur ipsam magnam?",
//       profession: "It-specialist"
//    },
//    {
//       name: "Clara",
//       age: "19",
//       resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat, consequatur magnam neque totam facere eligendi aliquam aliquid aspernatur deserunt itaque quia impedit odit blanditiis perferendis! Officiis aspernatur ipsam magnam?",
//       profession: "Front-end specialist"
//    },
//    {
//       name: "Idai",
//       age: "24",
//       resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat, consequatur magnam neque totam facere eligendi aliquam aliquid aspernatur deserunt itaque quia impedit odit blanditiis perferendis! Officiis aspernatur ipsam magnam?",
//       profession: "It-specialist"
//    },
// ]

// let body = document.querySelector('body')
// company.forEach(item=>{
//    let person = document.createElement("div");
//    let name = item.name;
//    let resume = item.resume;
//    let profession = item.profession;
   
//    body.append(person);
//    person.append(name);
//    person.append(resume);
//    person.append(profession);
// });

document.querySelectorAll('.accordion').forEach(accordion => {
   accordion.querySelector('.accordion__header').addEventListener('click', function() {
      accordion.classList.toggle('accordion--open');
   });
});
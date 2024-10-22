//array exercise
let people = ['Greg', 'Mary', 'Devon', 'James'];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

people.forEach(person => console.log(person));

people.splice(0, 1);
console.log(people); 

people.splice(2, 1);
console.log(people); 

people.unshift("Matt");
console.log(people); 

people.push("Your Name");
console.log(people); 

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

let peopleCopy = people.slice(1, 3);
console.log(peopleCopy);

people.splice(2, 1, "Elizabeth", "Artie");
console.log(people); 

let withBob = people.concat(["Bob"]);
console.log(withBob);

//object exercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
  };
  
  programming.languages.push("Go");
  console.log(programming.languages);
  
  programming["difficulty"] = 7;
  console.log(programming.difficulty);
  
  delete programming.jokes;
  console.log(programming);
  
  programming.isFun = true;
  console.log(programming); 
  
  programming.languages = programming.languages.map((language, index) => `${index} - ${language}`);
  console.log(programming.languages); 
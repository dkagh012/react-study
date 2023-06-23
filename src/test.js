const hobbies = ["Sports", "Cooking"];

const user = {
  name: "Max",
  age: 28
};


const newHobbies = ["Reading"];

const mergedJHobbies = [...hobbies, ...newHobbies];
console.log(mergedJHobbies);

const extenedUser = {
  isAdmin: true,
  ...user
}
console.log(extenedUser);
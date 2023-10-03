const user = {
  name: "Amol",
  surname: "Gaikwad",
};

const generateObjectEntries = (obj) =>
  Object.keys(obj).map((key) => [key, obj[key]]);
console.log(JSON.stringify(generateObjectEntries(user)));

// [["name","amol"],["surname","gaikwad"]]

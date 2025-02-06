function greeter(person: string): string {
  return "Hello, "+ person + "!";
}

function greeterArray(people: string[]): string {
  return "Hello, "+ people.join(', ') + "!";
}

let user = ["Alice", "Bob", "Charlie"];
console.log(greeter(user[0])); // Correct: Accessing the first element of the array
console.log(greeterArray(user)); // Correct: Passing the array to a function that accepts an array
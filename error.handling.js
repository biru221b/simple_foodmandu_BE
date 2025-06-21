//error handling
const x = 2;
try {
  x = 3;
  console.log(x); // this will throw an error
} catch (error) {
  console.log("Error:", error);
} finally {
  console.log("This will always run");
}

console.log("Hi");
console.log("Please");
console.log(2 + 3);

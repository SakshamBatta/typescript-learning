// function greet(firstName: string) {
//   console.log("Hello" + firstName);
// }

// greet("Saksham");

// type inference
// function sum(a: number, b: number): number {
//   return a + b;
// }

// const value = sum(10, 20);
// console.log(value);

// function isLegal(age: number): boolean {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }s

// let x = isLegal(27);

function two(fn: () => void) {
  console.log("Inside the function");
  setTimeout(() => {
    fn();
  }, 1000);
}

function one() {
  console.log("Hello I am running after 1 second");
}

two(one);

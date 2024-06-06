import { sum } from "../sum";

/*
write test case:

we write a test function , takes 2 arguments, 
1. string (we write test description)
2. call back function ( we write code to test)

*/

test("Sum function should caculate the sum of two numbers", () => {
  const result = sum(3, 4); // call the function that you want to test

  expect(result).toBe(7); //Assertion : - here we are testing the value to be sum.
});

import { sum } from "../sum"

test("Sum function should return su of two numbers", () =>{
    const result = sum(3,4);
    expect(result).toBe(7);
})
import sum from "../sum"
test("Sum function should calculate sum of two function",() => {
    const result = sum(3,4)
    //Assertion
    expect(result).toBe(7)
})
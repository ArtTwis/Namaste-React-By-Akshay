const sum = (num1, num2) => num1 + num2;

test("sum of two positive numbers", () => {
    expect(sum(2, 5)).toBe(7);
});
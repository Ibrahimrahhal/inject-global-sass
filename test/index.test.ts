const loader = require("../src/index");
describe("Basic Test", () => {
    test("Basic", () => {
        const file = loader("File Content");
        expect(file).toBe("File Content");
    });
});
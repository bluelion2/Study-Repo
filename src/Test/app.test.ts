import { getData } from "../apis";

export {};
describe("init app", () => {
  test("it can be true", () => {
    expect(2 + 2).toBe(4);
  });
});

jest.mock("axios");

describe("init app", () => {
  test("axios get data", async () => {
    const {
      data: { todos }
    } = await getData();
    console.log("todos", todos);
    expect(todos).toBe(todos);
  });
});

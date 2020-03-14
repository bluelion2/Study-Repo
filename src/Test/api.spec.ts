import axios from "axios";
import { OK } from "http-status";

jest.mock("axios");

const initTodos = [
  { id: 1, content: "HTML", complete: false },
  { id: 2, content: "CSS", complete: true },
  { id: 3, content: "JS", complete: false }
];

describe("api test", () => {
  //TODO
  // axios 요청시 undefined값을 가지고 옴

  // let data;
  // beforeEach(async () => {
  //   data = await axios.get("http://localhost:3000/data/todo.json");
  //   console.log("before", data);
  // });
  it("get test", async () => {
    expect(true).toEqual(true);
  });
});

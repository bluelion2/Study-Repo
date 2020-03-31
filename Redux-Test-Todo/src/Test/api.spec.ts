import axios from "axios";
import { OK } from "http-status";
import { getData } from "../apis";

jest.mock("axios");

const initTodos = [
  { id: 1, content: "HTML", complete: false },
  { id: 2, content: "CSS", complete: true },
  { id: 3, content: "JS", complete: false }
];

const url = "/data/todo.json";

describe("api test", () => {
  it("기본 테스트", async () => {
    const result = {
      data: {
        todos: initTodos
      }
    };
    axios.get.mockResolvedValue(result);
    return getData().then(data => {
      expect(data).toEqual(result);
    });
  });

  it("axios test", () => {});
});

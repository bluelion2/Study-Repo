import axios from "axios";

export const getData = () => axios.get("/data/todo.json");

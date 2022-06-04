import axios from "axios";

export const createQuiz = async (quiz) =>
  await axios.post(`${process.env.REACT_APP_API}/quiz`,{quiz});
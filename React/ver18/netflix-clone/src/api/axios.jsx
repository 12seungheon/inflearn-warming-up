import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3149e25e806f604d9225801287189d4d",
    language: "ko-KR",
  },
});

export default instance;

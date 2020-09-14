import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-a1bca.cloudfunctions.net/api",
  // "http://localhost:5001/clone-a1bca/us-central1/api",
});

export default instance;

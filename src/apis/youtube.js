import axios from "axios";

const KEY = "AIzaSyC7Iq4J0NzgXu9DKX2x7SWTF5OwZYAywrY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});

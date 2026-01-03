import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4d954f9923b146188a85c3a82be28bb8",
  },
});

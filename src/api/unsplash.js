import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID IGGNjUYRZXKXy0BLqB3wr3fLRm6xuJaqoRAuatLRC5c"
  }
});

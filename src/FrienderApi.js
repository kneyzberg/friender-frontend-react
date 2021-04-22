import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


class FrienderApi {
  
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${FrienderApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  
   //  auth routes

  static async registerUser(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }
  
  static async loginUser(data) {
    let res = await this.request(`auth/login`, data, "post");
    return res.token;
  }
  
  //user API routes
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async getAllUsers() {
    let res = await this.request(`users/`);
    return res.users;
  }


  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  static async confirmPassword(data){
    let res = await this.request(`auth/login`, data, "post");
    return res;
  }


  static async addToLikes(username, likedId ) {
    let res = await this.request(`users/${username}/explore/${likedId}`, { }, "post");
    return res;
  }
  
  static async getFriends(username) {
    let res = await this.request(`users/${username}/friends`);
    return res.friends;
  }

 
}

// for now, put token ("testuser" / "password" on class)
FrienderApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyMSIsImlhdCI6MTYxOTExMjg4Nn0.svhPerqrov08NTx0u-7ZxqPu_zq9dIzixVk_-hz0ezQ";


export default FrienderApi;
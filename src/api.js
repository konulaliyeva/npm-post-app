import axios from "axios";

export function sendUserInfoRequest(body){
    return axios.post("http://127.0.0.1:8080/userinfo", body);
}
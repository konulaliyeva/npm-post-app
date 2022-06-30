import axios from "axios";

export function attachPost(body){
    return axios.post("http://127.0.0.1:8080/posts", body);
}

export function getPost(){
    return axios.get("http://127.0.0.1:8080/posts");
}

export function sendCommentRequest(comment){
    return axios.post("http://127.0.0.1:8080/comments", comment);
}
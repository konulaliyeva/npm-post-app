import { loginForm } from "./dom";
import { username } from "./dom";
import {password} from "./dom";
import {loginBtn} from "./dom";
import {sendUserInfoRequest} from "./api";

loginForm.addEventListener("submit", submitFormFn);

async function submitFormFn(event){
    event.preventDefault();
    const requestedInfo = {
        username: username.value,
        password: password.value
    }
    await sendUserInfoRequest(requestedInfo);
    username.value ="";
    password.value = ""; 
}
loginBtn.onclick =function(){
    if(username.value ==="" || password.value ==="")
        return window.location.href("./index.html");

    return window.location.href("./posts.html");
}


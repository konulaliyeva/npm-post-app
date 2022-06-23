import { loginForm } from "./dom";
import { username } from "./dom";
import {password} from "./dom";
import {loginBtn} from "./dom";
import { alertBox } from "./dom";
import {sendUserInfoRequest} from "./api";

const {username, password} =this.elements;
async function submitFormFn(event){
    event.preventDefault();
    alertBox.hidden = true;
    const requestedInfo = {
        username: username.value,
        password: password.value
    }
    await sendUserInfoRequest(requestedInfo);
    username.value ="";
    password.value = ""; 
}
loginBtn.onclick =function(){
    if(username.value ==="" || password.value ===""){
        alertBox.hidden = false;
        return location.href("./index.html");
    }

    return location.href("./posts.html");
}


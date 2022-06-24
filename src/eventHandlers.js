import uniqid from "uniqid";
import { postContent, alertBox, postTitle } from "./dom";
import { attachPost } from "./api";

export async function submitFormFn(event) {
  event.preventDefault();
  alertBox.hidden = true;
  const requestedInfo = {
    id: uniqid(),
    title: postTitle.value,
    content: postContent.value,
  };
  if (postTitle.value === '' || postContent.value === '') {
    alertBox.hidden = false;
  } else {
    await attachPost(requestedInfo);
    postTitle.value = '';
    postContent.value = '';
    location.href = './posts.html';
  }
}

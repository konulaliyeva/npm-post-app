import uniqid from "uniqid";
import { postContent, alertBox, postTitle, postContainer } from "./dom";
import { attachPost, getPost } from "./api";

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
    publishPost();
    // deletePost();
  }
}


export async function publishPost(){
  const {data:posts} = await getPost();
  let htmlPost = "";
  for(let post of posts){
    htmlPost += ` <div class="single_post mt-5 d-flex justify-content-center">
    <div class="single_post_right">
      <h2>${post.title}</h2>
      <p class="pb-2 pt-4">
        ${post.content}
      </p>
      <div class="reaction_comments d-flex justify-content-between align-items-baseline me-5">
          <button class="btn mb-3 me-4"> 12 comments</button>
          <button class="btn"><i class="fa-solid fa-thumbs-up pe-2"></i>7</button>
  
      </div>
       <div class="d-flex justify-content-between mt-3 align-items-baseline">
          <input class="input_comment pt-2 pb-2 px-4 mb-4" type="text" placeholder="Add a comment" />
      </div>
      </div>
    <div class="single_post_left d-flex flex-direction-row">
      <button class="btn btn-trash-edit"><i class="fa-solid fa-pen"></i></button>
      <button class="btn btn-trash-edit" id="trash_bin"><i class="fa-solid fa-trash me-4"></i></button>
    </div>
  </div>`
  }
   postContainer.innerHTML = htmlPost;

}



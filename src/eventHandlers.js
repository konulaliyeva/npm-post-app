import uniqid from "uniqid";
import { postContent, alertBox, postTitle, postContainer} from "./dom";
import { attachPost, getPost, sendCommentRequest } from "./api";

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
       <form id="comment_form" class="d-flex justify-content-between mt-3 align-items-baseline">
          <input id="comment_box" class="input_comment pt-2 pb-2 px-4 mb-4" type="text" placeholder="Add a comment" />
      </form>
      </div>
    <div class="single_post_left d-flex flex-direction-row">
      <button class="btn delete_btn"><i class="fa-solid fa-xmark"></i></button>
    </div></div>`
  }
   
   postContainer.innerHTML = htmlPost;

}
const deleteBtn = document.querySelectorAll(".delete_btn");
console.log(deleteBtn);

const eachDivs = document.querySelectorAll(".single_post");

export async function sendComment(event){
  event.preventDefault();
  let commentBody = {
    id: uniqid(),
    content: commentBox.value 
  }
  await sendCommentRequest(commentBody);
  commentBox.value = "";
}
  

export function deletePostItem(event){
  event.preventDefault();
  console.log("message")
  console.log(event.target);
  
  if(event.target.matches("button.delete_btn")){
      eachDivs.classList.add("hideDiv")
  }
};
// export async function deletePostItem(event) {
  
//   // if (event.target.matches("button.delete_btn")) {
//   //   // event.target.parentElement.remove();
//   //   const key = event.target.parentElement.dataset.key;
//   //   const {data:posts} = await getPost();
//   //   let index = posts.findIndex((item) => Number(item.id) === Number(key));
//   //   toDoList.splice(index, 1);
//   //   displayList();
//   //   }
//   }

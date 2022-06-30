import { contentForm, commentForm } from "./dom";
import { submitFormFn, publishPost,sendComment,deletePostItem, deletePostItem } from "./eventHandlers";


publishPost();
contentForm.addEventListener("submit", submitFormFn);
// addBtn.addEventListener("click", clickBtn);

commentForm.addEventListener("submit", sendComment);
// console.log(deleteBtn);

deletePostItem();
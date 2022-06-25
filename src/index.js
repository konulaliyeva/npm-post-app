import { contentForm } from "./dom";
import { submitFormFn, publishPost} from "./eventHandlers";


publishPost();
deletePost();
contentForm.addEventListener("submit", submitFormFn);
// addBtn.addEventListener("click", clickBtn);

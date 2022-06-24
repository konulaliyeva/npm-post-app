import { contentForm } from "./dom";
import {addBtn} from "./dom";
import { submitFormFn} from "./eventHandlers";



contentForm.addEventListener("submit", submitFormFn);
// addBtn.addEventListener("click", clickBtn);
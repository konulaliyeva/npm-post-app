import { contentForm } from "./dom";
import {addBtn} from "./dom";
import { submitFormFn, clickBtn} from "./eventHandlers";



contentForm.addEventListener("submit", submitFormFn);
addBtn.addEventListener("click", clickBtn);
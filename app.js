import {add, subtract, pi} from "./src/mathUtils.js";

import message from "./src/message.js";

console.log(add(3,2));
console.log(subtract(3,2));
console.log(pi);

message("Sibangi");

import { counter,incrementCounter }  from "./src/counter.js";

document.getElementById("updateCounter").addEventListener("click", ()=>{
  incrementCounter();
  document.getElementById("counter").textContent=counter;
});

//module scope
import { showPublicVar, showGlobalThis } from "./src/moduleScope.js";
showPublicVar();
showGlobalThis();

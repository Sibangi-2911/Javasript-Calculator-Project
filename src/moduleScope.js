let privateVar = "Private Variable";

export let publicVar = "Public Variable";

function showPrivateVar(){
  console.log(privateVar);
}

export function showPublicVar(){
  console.log(privateVar);
  console.log(publicVar);
}

export function showGlobalThis(){
  console.log(globalThis);
}

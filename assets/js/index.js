let username= document.getElementById("user");
 let add= document.getElementById("add");
 let inputBox=document.getElementById("userInput");
 let list=document.getElementById("listArea");


//create items and buttons
add.addEventListener('click',()=>{
  if(inputBox.value.length == 0){
      alert("Please Enter a Task")
  }

  else{
      list.innerHTML += `
          <div class="list">
          <button class="complete">
          <i class="fa fa-check"></i>
          </button>
              <span id="listitem">
                  ${inputBox.value}
              </span>
              <button class="delete">
                  <i class="fa fa-trash-alt"></i>
              </button>
          </div>
      `;
  }
  inputBox.value="";

      let del = document.querySelectorAll(".delete");
      for(let i=0; i<del.length; i++){
          del[i].onclick = function(){
              this.parentNode.remove();
      }
  }
  let check= document.querySelectorAll(".complete");
  for(var i=0; i<check.length; i++){
      check[i].onclick = function(){
          this.parentNode.style.textDecoration="line-through";
  }
}
})

//Cookie functions
function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    getCookie();
    checkCookie()
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      username.innerHTML=`${user}'s`;
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }

  

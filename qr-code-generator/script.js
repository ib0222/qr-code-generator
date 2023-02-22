let input = document.querySelector(".input");
let inputContainer = document.querySelector(".input-container")
let button = document.querySelector(".btn");
let qrImage = document.querySelector(".image");
let value = "";

button.addEventListener("click",()=>{
   if(value === ""){
      input.classList.toggle("warning");
      let warning = document.createElement("div");
      warning.innerHTML = "Yazı daxil edin";
      warning.className = "empty-text";
      inputContainer.appendChild(warning);
      setTimeout(() => {
         input.classList.toggle("warning")
         inputContainer.removeChild(warning);
      }, 1000);
      
      qrImage.src = ""
   }else{
      qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
      input.value = ""
   }


})


input.addEventListener("input",(e)=>{
   value = e.target.value;
})


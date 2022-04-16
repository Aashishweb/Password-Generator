
let generateClick = document.getElementById("generate-btn")
generateClick.addEventListener("click", triggerGeneratePassword )

//function for generating Random Password 
function generatePassword() {
    let length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
       
    }
    
    return retVal;     
  
}

//triggering random password function in a loop for four different values

function triggerGeneratePassword(){
    for(let i = 1; i<5; i++ ) {
        const value =  generatePassword()
        document.getElementById(`b${i}`).innerText = value
      };
}





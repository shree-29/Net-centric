function validate() {
    
    var dis= document.getElementById("dis");
    var email =document.myForm.email.value;
    var fname=document.myForm.fname.value;
    var lname=document.myForm.lname.value;

    atpos = email.indexOf("@");
    mob=/^\d{10}$/;
    txt=/^[a-zA-Z]+$/;

    

    if (atpos==-1) {
      // Changing content and color of content
      dis.textContent = "Please enter a valid Email-ID"
      dis.style.color = "red"
      return false;
    } 
    else {
        dis.textContent = fname +" " +lname;
        return false;
    }
                

 }

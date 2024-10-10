function validateform()
{
    let name= document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let msg=document.getElementById("message").value;
    if(name== "" || email == "" || msg =="")
    {
        alert("All fields must be filled out"); 
        if(name==""){
            document.getElementById("name").focus();
        } 
        else if(email==""){
            document.getElementById("email").focus();
        }
        else{
            document.getElementById("message").focus();
        }
        return false;
    }
    

   
    alert('Form submitted successfully!');
    return true;
}

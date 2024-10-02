function showForm(){
    document.getElementById('registerForm').style.display='block';
}
function submitForm(){
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    const Class=document.getElementById('class').value;
    alert("Registration successful");
    document.getElementById('registerForm').style.display='none';
}
function contactUs(){
    alert("Contac us at chairman_ieee@ceconline.edu");
}

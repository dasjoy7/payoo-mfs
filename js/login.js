// console.log('button clicking file added');


//step 1: set event handler
document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button clicked');



    //get the phone number
    const phonenumber = document.getElementById('phone-number').value;
    console.log(phonenumber);
});
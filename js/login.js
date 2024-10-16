// console.log('button clicking file added');


//step 1: set event handler
// document.getElementById('button-login').addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('login button clicked');



//     //get the phone number
//     const phonenumber = document.getElementById('phone-number').value;
//     const pinnumber= document.getElementById('pin-number').value;
//     console.log(phonenumber, pinnumber);

//     if(phonenumber==='5'&&pinnumber==='1234')
//     {
//         console.log('you are logged in');
//     }
//     else{
//         alert('Wrong phone number and pin');
//     }
// });

document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();

    const phonenumber = document.getElementById('phone-number').value;
    const pinnumber = document.getElementById('pin-number').value;
    // console.log(phonenumber, pinnumber);
    if(phonenumber==='5' && pinnumber === '1234')
    {
        console.log('you are logged in');
        window.location.href='/home.html';
    }
    else{
        alert('wrong phone number');
    }
});
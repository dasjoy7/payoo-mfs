//add money to the account

//step-1: add event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    //prevent page reload after form submit
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    //get the pin number provided
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(pinNumber);
});
//add money to the account

//step-1: add event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    //prevent page reload after form submit
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    // console.log(typeof addMoneyInput);

    //get the pin number provided
    const pinNumber = document.getElementById('input-pin-number').value;
    // console.log(typeof pinNumber);

    //verify the pin number
    if(pinNumber ==='1234')
    {
        console.log("adding money to your account");

        //step 4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        // console.log(balance);

        //step 5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber+balanceNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert("failed to add money");
    }
});
const validPIN=1234;

// function to get input value 
function getInputValueNumber(id){
const inputField=document.getElementById(id);
const inputFieldValue=inputField.value
const inputFieldValueNumber=parseInt(inputFieldValue)

return inputFieldValueNumber;
}

function getInputValue(id){
  const inputField=document.getElementById(id);
const inputFieldValue=inputField.value

return inputFieldValue;
}

// function to get innertext
function getInnerText(id){
  const element=document.getElementById(id )
  const elementValue=element.value
  const elementValueNumber=parseInt(elementValueNumber)

  return elementValueNumber
}

// function for toggle

function getToggleValue(id){
  const forms=document.getElementsByClassName('form')
  for(const form of forms){
    form.style.display='none'
  }
   document.getElementById(id).style.display='block'
}

// cart add money
document.getElementById('btn-add-money').addEventListener('click',function(event){
   const bank=getInputValueNumber('bank')
   const accountNumber=getInputValueNumber('account-number')
   const amount=getInputValueNumber('amount-withdraw')
   const pin=getInputValueNumber('add-pin')

   const availableBalance=parseInt(document.getElementById('available-amount').innerText)

   if(accountNumber.length<11){
    alert('please provide a valid account number')
    return;
   }

   if(pin !==validPIN){
    alert('Incorrect pin')
    return;
   }

  const totalNewAvailableBalance=amount+availableBalance;

  document.getElementById('available-amount').innerText=totalNewAvailableBalance;
 })

 


// cart cash out 
 
document.getElementById('btn-withdraw-money').addEventListener('click', function(event){
   const agentNumber=getInputValueNumber('agent-number')
   const withdrawAmount=getInputValueNumber('amount-withdraw-to-agent')
   const pinNumber=getInputValueNumber('add-pin-for-cash-out')
    

   const availableBalance=parseInt(document.getElementById('available-amount').innerText)

  //  if(agentNumber.length!==11){
  //   alert('Input valid number ')
  //   return;
// }

// if(pinNumber!==pin){
//   alert('please input correct pin number')
//   return;
// }

 if(withdrawAmount<=0){
  alert('please input a valid withdraw number')
  return;
}
if(withdrawAmount>availableBalance){
  alert('insufficient balance!')
  return;
}

   const availableBalanceAfterCashOut=availableBalance-withdrawAmount;

   document.getElementById('available-amount').innerText=availableBalanceAfterCashOut;
  
  })


  //  toggling section
   

document.getElementById('cart-add-money').addEventListener('click',function(){
  // document.getElementById('cart-cash-out-parent').style.display='none'
  //  document.getElementById('cart-transfer-money-parent').style.display='none'
  // document.getElementById('cart-add-money-parent').style.display='block'


  // const forms=document.getElementsByClassName('form')

  // for(const form of forms){
  //   form.style.display='none'
  // }
  //  document.getElementById('cart-add-money-parent').style.display='block'

   getToggleValue('cart-add-money-parent')

})


document.getElementById('cart-cash-out').addEventListener('click',function(){
  // document.getElementById('cart-add-money-parent').style.display='none'
  //  document.getElementById('cart-transfer-money-parent').style.display='none'
  // document.getElementById('cart-cash-out-parent').style.display='block'

  // const forms=document.getElementsByClassName('form')

  // for(const form of forms){
  //   form.style.display='none'
  // }
  //  document.getElementById('cart-cash-out-parent').style.display='block'

    getToggleValue('cart-cash-out-parent')
})


document.getElementById('cart-transfer-money').addEventListener('click',function(){
    // document.getElementById('cart-add-money-parent').style.display='none'
    //   document.getElementById('cart-cash-out-parent').style.display='none'
    //   document.getElementById('cart-transfer-money-parent').style.display='block'

  //   const forms=document.getElementsByClassName('form')

  // for(const form of forms){
  //   form.style.display='none'
  // }
  //  document.getElementById('cart-transfer-money-parent').style.display='block'

    getToggleValue('cart-transfer-money-parent')
})

document.getElementById('cart-get-bonus').addEventListener('click',function(){
getToggleValue('cart-get-bonus-parent')
  })
document.getElementById('cart-pay-bill').addEventListener('click',function(){
getToggleValue('cart-pay-bil-parent')
  })
document.getElementById('cart-transactions').addEventListener('click',function(){
getToggleValue('cart-transactions-parent')
  })


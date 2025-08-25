const validPIN=1234;
const transactionData=[]

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

// function for toggle handle 

function getToggleHandle(id){
  const formBtn=document.getElementsByClassName('form-btn')

   for(const btn of formBtn){
    btn.classList.remove('border-1','border-gray-300')
    btn.classList.remove('border-2','border-black-700','bg-[#0874f273]')
   }

   document.getElementById(id).classList.remove('border-gray-300')
   document.getElementById(id).classList.add('border-2','border-black-700','bg-[#0874f273]')
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

  // for transaction history
  const data={
    name:'Add Money',
    date :new Date().toLocaleTimeString()
  }
  transactionData.push=data;
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

   // for transaction history
  const data={
    name:'Cash Out',
    date :new Date().toLocaleTimeString()
  }
  transactionData.push=data;
  console.log(transactionData);
  
  })

  // for transactions list 
  document.getElementById('cart-transactions').addEventListener('click',function(){
    const transactionContainer=document.getElementById('transaction-container')

    for(const data of transactionData){
      const div=document.createElement('div')
      div.innerHTML=`
      
      <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
              <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                  </div>
                  <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                  </div>
              </div>
      
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `

        transactionContainer.appendChild(div)
    }
  })


  //  toggling section
   

document.getElementById('cart-add-money').addEventListener('click',function(){
   getToggleValue('cart-add-money-parent')

   getToggleHandle('cart-add-money');
})


document.getElementById('cart-cash-out').addEventListener('click',function(){
  getToggleValue('cart-cash-out-parent')

  getToggleHandle('cart-cash-out');
 })


document.getElementById('cart-transfer-money').addEventListener('click',function(){
     getToggleValue('cart-transfer-money-parent')

     getToggleHandle('cart-transfer-money');
 })



document.getElementById('cart-get-bonus').addEventListener('click',function(){
getToggleValue('cart-get-bonus-parent')

getToggleHandle('cart-get-bonus');
 })


document.getElementById('cart-pay-bill').addEventListener('click',function(){
getToggleValue('cart-pay-bil-parent')

getToggleHandle('cart-pay-bill');
 })


document.getElementById('cart-transactions').addEventListener('click',function(){
getToggleValue('cart-transactions-parent')

getToggleHandle('cart-transactions');
})


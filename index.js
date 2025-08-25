// login button functionality
document.getElementById('btn-login').addEventListener('click',function(event){
 const mobileNumber=17188099320
 const pinNumber=1234

 const mobileNumberValue=document.getElementById('mobile-number').value ;
 const mobileNumberValueConverted=parseInt(mobileNumberValue);

 const pinNumberValue=document.getElementById('pin-number').value ;
 const pinNumberValueConverted=parseInt(pinNumberValue);

//  console.log(mobileNumberValueConverted,pinNumberValueConverted)
 

 if(mobileNumberValueConverted===mobileNumber && pinNumberValueConverted===pinNumber){
  window.location.href='./home.html'
 }
 else{
  alert('invalid information')
 }
 
})
// if(mobileNumberValueConverted!==mobileNumber){
//   alert('mobile number invalid')
//   return;
// }
// if(pinNumberValueConverted!==pinNumber){
//   alert('Incorrect pin')
//   return;
// }
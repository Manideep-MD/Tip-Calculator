var bill = document.getElementById("bill")
var select = document.getElementById("service")
var sharing = document.getElementById("people")
var button = document.getElementById("call")
var amount = document.getElementById("amount")

button.addEventListener("click", function (){
if (bill.value == isNaN ){
     return alert("Please enter number")
}
else{
  var total = (bill.value * select.value)
  amount.innerHTML= "Rs :" + "  "+total/sharing.value + " "+'</br>'+"Each"
  }
})

// var excellent = document.getElementById("Excellent")
// var medium = document.getElementById("Medium")

    //  var exll = (bill.value * 20)/100
    //  var total = exll / sharing.value
     
    //  var medium = (bill.value * 10)/100
    //  var total1 = medium / sharing.value

    //  var bad = (bill.value * 10)/100
    //  var total2 = bad / sharing.value

    //    if(document.getElementById("Excellent")){
//     var exll = (bill.value * 20)/100
//      var total = exll / sharing.value
//     return amount.innerHTML=total
//    }
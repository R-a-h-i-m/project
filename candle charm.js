var plus = document.querySelectorAll(".plus");
var minus = document.querySelectorAll(".minus");
var ttprice = document.querySelector("#total");
var tprice = document.querySelectorAll(".price")

function increment(e){
    var cible = e.target
    var div = cible.parentElement
  var divP =div.querySelector('p')
  var value = Number(divP.innerHTML)
  value++
  divP.innerHTML=value

  var td = div.parentElement
  var tr = td.parentElement.parentElement
 
  var price = tr.querySelector(".unitPrice")

  var totalPrice = tr.querySelector(".price")
 
  totalPrice.innerHTML =  Number (price.innerHTML) * value
}

function decrement(e){
  var cible = e.target
  var div = cible.parentElement
var divP =div.querySelector('p')
var value = Number(divP.innerHTML)
if (value > 0) value--
divP.innerHTML=value

var td = div.parentElement
var tr = td.parentElement.parentElement

var price = tr.querySelector(".unitPrice")
var totalPrice = tr.querySelector(".price")

totalPrice.innerHTML =  Number (price.innerHTML) * value 

}



    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener("click", increment);
         }
     
     
         for (let i =0; i<minus.length;i++){
             minus[i].addEventListener("click", decrement); }
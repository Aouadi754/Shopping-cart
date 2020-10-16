var Buttons_Add=document.getElementsByClassName('button_add')
for (i in Buttons_Add){
    var Button_Add=Buttons_Add[i]
    Button_Add.addEventListener('click',function_add)
}


function function_add (Event){
    var Button_Add=Event.target
    var Item = Button_Add.parentElement.parentElement
    var Phone_name = Item.querySelector('h3').innerText
    var Phone_price = Item.querySelector('p').innerText
    var Phone_img_src = Item.querySelector('img').src
    var cartItem = document.createElement('div')
    cartItem.classList.add('cart_item')
    var cart=document.querySelector('.my_cart')
    var cart_item_names=cart.getElementsByClassName('cart_item_name')
    for (i in cart_item_names){
        if (cart_item_names[i].innerText == Phone_name) {
           return alert('This item is already added to the cart')
            
        }
    }
    var cartItemContents = 
    `<div class="title_img">
  <img src="${Phone_img_src}" alt="phone_1" class="cart_item_img">
  <p class="cart_item_name">${Phone_name}</p>
</div>
  <p class="price_cart">${Phone_price}</p>
  <div class="quantity_style">
  <button type="button" class="button_plus">+</button>
  <p class="quantity_cart">1</p> 
  <button type="button" class="button_minus">-</button>
  </div>
  <img src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/82-512.png" alt="remove_pic" class="delete_button"> `
    cartItem.innerHTML=cartItemContents
var cart_last_child= cart.lastElementChild
cart.insertBefore(cartItem,cart_last_child)
total_update()
cartItem.querySelector('.button_plus').addEventListener('click', quantity_add)
cartItem.querySelector('.button_minus').addEventListener('click',quantity_minus)
cartItem.querySelector('.delete_button').addEventListener('click', function_delete)
cartItem.querySelector('.quantity_cart').addEventListener('change', total_update)
}

var Buttons_plus=document.getElementsByClassName('button_plus')
for (x in Buttons_plus){
  var Button_plus=Buttons_plus[x]
  Button_plus.addEventListener('click',quantity_add)
}
function quantity_add (Event){
Event.target.nextElementSibling.innerHTML++
total_update()
}

var Buttons_minus=document.getElementsByClassName('button_minus')
for (x in Buttons_minus){
  var Button_minus=Buttons_minuss[x]
  Button_minus.addEventListener('click',quantity_minus)
}
function quantity_minus (Event){

if (Event.target.previousElementSibling.innerHTML>1){
  Event.target.previousElementSibling.innerHTML--
}
total_update()
}


var Buttons_Delete=document.getElementsByClassName('delete_button')
for (x in Buttons_Delete){
    var Button_Delete=Buttons_Delete[x]
    Button_Delete.addEventListener('click',function_delete)
}


function function_delete (Event){
  
  Event.target.parentElement.remove()
total_update()
}

var quantities=document.getElementsByClassName('quantity_cart')
for (x in quantities){
    var quantity=quantities[x]
    quantity.addEventListener('change',total_update)
}

function total_update(){
 

var cartItems = document.getElementsByClassName('cart_item')
    var total = 0
    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i]
        var priceElement = cartItem.querySelector('.price_cart')
        var quantity = cartItem.querySelector('.quantity_cart')
        var price = parseFloat(priceElement.innerText.replace('€', ''))
        total = total + (price * quantity.innerHTML)
    }
    total = Math.round(total * 100) / 100
    document.querySelector('.total').innerText =total + ' €'
   
}
var btns=document.getElementsByTagName('i');
  for (x in btns){
    var btn=btns[x]
    console.log(btn)
    btn.addEventListener('click',toggle)
}
  
  function toggle(){
    if (btn.classList.contains("far fa-heart")){
      btn.classList.remove("far")
      btn.classList.add("fas")
    }else {
      btn.classList.remove("fas")
      btn.classList.add("far")
    }
  }
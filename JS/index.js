//  let addToCart = document.getElementsByClassName('btn-primary');
//  function updateCart(){
//     let addToCart = document.getElementsByClassName('btn-primary'); 
//  }
//  let counter = 0; 
// function updateCart(){  
//    let cartbadge = document.querySelectorAll('.badge');
//    counter += 1;
//    cartbadge.innerHTML= counter;
// }

//  let counterbtn = document.querySelectorAll('.btn-primary');
//  counterbtn.addEventListener('click', updateCart);

// function addToCart(){
//    displaycartItem()
// } 

// function displaycartItem(){
//    let cartItem = document.querySelectorAll('.cart-badge');
//    cartItem.innerText

// }
// let moveInCart = document.getElementsByClassName('btn-primary');
// moveInCart.addEventLisner('onclick','Item has add in cart box')

 const addToCart = document.querySelectorAll('.btn-success');

 
addToCart.forEach(button =>{button.addEventListener('click',moveToCart);
})
function moveToCart() {
 alert("Item add in Cart")
}

// prompt

// let name = prompt("Enter your name :");
// console.log(name);
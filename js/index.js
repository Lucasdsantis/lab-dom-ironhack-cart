// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product .querySelector('.price span');
  const quantity = product .querySelector('.quantity input')
   const priceConst =Number(price.innerHTML)
   console.log(priceConst)
   const quantConst =Number(quantity.value)
   console.log(quantConst)
  const subTotalPrice = priceConst * quantConst
  const sTotal = product.querySelector('.subtotal span')
  sTotal.innerHTML = subTotalPrice
  return subTotalPrice
  //... your code goes here

}

function calculateAll() {
 const cAll = document.getElementsByClassName('product')
 let sumAll = 0
 for (i =0; i < cAll.length; i++){
  sumAll += updateSubtotal(cAll[i])
 }

 const intera3 = document.querySelector('#total-value span')
 intera3.innerHTML = sumAll


  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
const removeProduct = target.parentNode
  removeProduct.removeChild(target)
 calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const calculateRemoveBtn = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < calculateRemoveBtn.length; i++){
    calculateRemoveBtn[i].addEventListener('click', removeProduct);
  }
  
 
  //... your code goes here
});

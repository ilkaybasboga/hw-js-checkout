const proTot1 = document.getElementById("productTotal1");
const proTot2 = document.getElementById("productTotal2");
const proTot3 = document.getElementById("productTotal3");
const subTotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const shipping = document.getElementById("shipping");
const total = document.getElementById("total");
let container = document.querySelector(".container");


container.addEventListener("click", (e) => {
  if (e.target.className.includes("buttonDecrease")) {
    const quantity = e.target.nextElementSibling;
    const proTotal =
      e.target.parentElement.nextElementSibling.nextElementSibling
        .childNodes[1];
    decreaseProTotal(proTotal, quantity); //eksiltme hesabı
    decrease(quantity); //ürün azaltma
  } 
  
  else if (e.target.className.includes("buttonIncrease")) {
    const quantity = e.target.previousElementSibling;
    const proTotal =
      e.target.parentElement.nextElementSibling.nextElementSibling
        .childNodes[1];
    increaseProTotal(proTotal, quantity); //arttırma hesabı
    increase(quantity); //ürün arttırma
  } 
  
  else if (e.target.className.includes("remove")) {
    const remove = e.target;
    const proTotal = e.target.nextElementSibling.childNodes[1];
    removeFunc(remove, proTotal);
    subTotalFunc();
    taxFunc();
    totalFunc();
  }
});
// *******Functions********

const decrease = (quantity) => {
  Number(quantity.innerText) > 1
    ? (quantity.innerText = Number(quantity.innerText) - 1)
    : "";
};

const increase = (quantity) => {
  quantity.innerText = Number(quantity.innerText) + 1;
};

const increaseProTotal = (proTotal, quantity) => {
  let price =
    (Number(proTotal.innerText) / Number(quantity.innerText)) *
    (Number(quantity.innerText) + 1);

  proTotal.innerText = price.toFixed(2);

  subTotalFunc();
  taxFunc();
  totalFunc();
};
const decreaseProTotal = (proTotal, quantity) => {
  if (quantity.innerText > 1) {
    let price =
      (Number(proTotal.innerText) / Number(quantity.innerText)) *
      (Number(quantity.innerText) - 1);
  
  proTotal.innerText = price.toFixed(2);
}
  subTotalFunc();
  taxFunc();
  totalFunc();
};

const subTotalFunc = () => {
  const price =
    Number(proTot1.innerText) +
    Number(proTot2.innerText) +
    Number(proTot3.innerText);

    subTotal.innerText=price.toFixed(2);
};

const taxFunc = () => {
    const price=Number(subTotal.innerText)*0.18;

    tax.innerText=price.toFixed(2);
};

const totalFunc = () => {
    if(Number(subTotal.innerText)){
    const price=Number(subTotal.innerText)+Number(tax.innerText)+Number(shipping.innerText);

    total.innerText=price.toFixed(2);
}else{
    total.innerText=0
}
};

const removeFunc=(remove, proTotal)=>{
    remove.parentElement.parentElement.remove();
    proTotal.innerText=0;

};
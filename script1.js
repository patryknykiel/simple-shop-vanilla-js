let productsData = null;
let basket = {};



async function getProductsFromJSON() {
  const res = await fetch('./products1.json');
  return res.json();
}

getProductsFromJSON().then(data => {
  productsData = data;
  startApp(); 
});

function startApp() {
  addProductsToShop(productsData);
}

function addProductsToShop(data) {

    Object.entries(data).forEach((product) => {

        const newDiv = document.createElement("div");
        const productImg = document.createElement("img");
        const productName = document.createElement("p");
        const manufacturerName = document.createElement("p");
        const description = document.createElement("p");
        const productPrice = document.createElement("p");
        const quantityInput = document.createElement("input");
        const changeQuantityDiv = document.createElement("div");
        const changeQuantityPlus = document.createElement("button");
        const changeQuantityMinus = document.createElement("button");
        const addToBasket = document.createElement("button");
        
        productName.innerText = product[1].name;
        manufacturerName.innerText = product[1].manufacturer;
        productImg.src = product[1].img;
        description.innerText = product[1].description;
        productPrice.innerText = product[1].price;     

        newDiv.classList.add("item");
        productName.classList.add("product-name");
        manufacturerName.classList.add("manufacturer-name");
        description.classList.add("description");
        productPrice.classList.add("product-price");
        quantityInput.type = "number";
        quantityInput.value = 1;
  
        changeQuantityPlus.innerText = "+";
        changeQuantityMinus.innerText = "-";
        addToBasket.innerText = "Add";
        addToBasket.classList.add("add-to-basket");
        changeQuantityDiv.classList.add("change-quantity-div");

        changeQuantityPlus.addEventListener('click', () => {
          
          if (quantityInput.value > 998) {
            quantityInput.value = 999;
          }

          else {
            quantityInput.value++
          }
          
        });
        changeQuantityMinus.addEventListener('click', () => {
          
          if (quantityInput.value < 2) {
            quantityInput.value = 1;
          }

          else {
            quantityInput.value--;

          }
          
          
        });
        addToBasket.addEventListener('click', () => addProductToBasket(product[1].id, quantityInput.value, product[1].name, product[1].price, product[1].manufacturer));

        


        quantityInput.addEventListener('input', () => {
          quantityInput.addEventListener('keydown', (e) => {
          if (e.key === '.' || e.key === ',') {
            e.preventDefault();
          }

          if (quantityInput.value === '' && e.key === '0') {
            e.preventDefault();
          }


        });
          
        });

        quantityInput.addEventListener('change', () => {


          if (quantityInput.value > 998) {
            quantityInput.value = 999;
          }

          else if (quantityInput.value < 2) {
            quantityInput.value = 1;
          }
         });

        document.querySelector(".items-list").appendChild(newDiv);
        newDiv.appendChild(productImg);
        newDiv.appendChild(productName);
        newDiv.appendChild(manufacturerName);
        newDiv.appendChild(description);
        newDiv.appendChild(productPrice);
        newDiv.appendChild(quantityInput);
        newDiv.appendChild(changeQuantityDiv);
        changeQuantityDiv.appendChild(changeQuantityPlus);
        changeQuantityDiv.appendChild(changeQuantityMinus);
        newDiv.appendChild(addToBasket);       

    })};


function addProductToBasket(id, quantity, name, price, manufacturer) {

    if (Object.keys(basket).length === 0) {
            
            basket = Object.assign({}, {[manufacturer]: {[id]: [quantity, name, price, true]} });
        
    }

    else {
      
        //producent jest w koszyku produkt ktorego dodajemy
        
            if (Object.keys(basket).includes(manufacturer)) {

              Object.assign(basket[manufacturer], {[id]: [quantity, name, price, true]});
            }

            //producenta ktorego item dodajemy nie ma w koszyku 
            else {
              basket = Object.assign(basket, {[manufacturer]: {[id]: [quantity, name, price, true]} });

            }
        }
   

console.log(basket);
renderCart();


}


function renderCart() {

  document.querySelector(".basket-list").innerHTML = null;
  document.querySelector(".basket-total").innerHTML = null;
  const TotalManufSum = document.createElement("div");

  Object.keys(basket).forEach((manuf) => {

    let tempArr = [];

            const newManufacturerInBasket = document.createElement("div");
            const newManufacturerInBasketHeader = document.createElement("div");
            const manufacturerCheckbox = document.createElement("input");
            const manufacturerName = document.createElement("p");
            const productsInBasketList = document.createElement("div");
            const manufacturerTotal = document.createElement("p");
            const manufacturerTotalDiv = document.createElement("div");
            const manufacturerTotalText = document.createElement("p");

            newManufacturerInBasket.classList.add("manufacturer-container");
            manufacturerCheckbox.type = "checkbox";
            
            manufacturerCheckbox.addEventListener('change', () => handleManufCheckboxes(manuf, manufacturerCheckbox));
            manufacturerName.innerText = manuf;
            productsInBasketList.classList.add("products-list");
            manufacturerTotal.innerText = 0;
            manufacturerTotal.classList.add("manufacturer-total");
            newManufacturerInBasketHeader.classList.add("manufacturer-header");
            manufacturerTotalText.innerText = "Total:";
            manufacturerTotalDiv.classList.add("manufacturer-total-div");

            document.querySelector(".basket-list").appendChild(newManufacturerInBasket);
            newManufacturerInBasket.appendChild(newManufacturerInBasketHeader);
            newManufacturerInBasketHeader.appendChild(manufacturerCheckbox);
            newManufacturerInBasketHeader.appendChild(manufacturerName);
            newManufacturerInBasket.appendChild(productsInBasketList);


//ide po id produktu
    Object.keys(basket[manuf]).forEach((id) => {
            
            const productInBasket = document.createElement("div");
            const productCheckbox = document.createElement("input");
            const productName = document.createElement("p");
            const productPrice = document.createElement("p");
            const productQuantity = document.createElement("p");
            const changeQuantityBasketDiv = document.createElement("div");
            const changeQuantityBasketPlus = document.createElement("button");
            const changeQuantityBasketMinus = document.createElement("button");
            const deleteFromBasket = document.createElement("button");

            productInBasket.classList.add("product-in-basket");
            productCheckbox.type = "checkbox";

           tempArr.push((basket[manuf][id][3]));


            if (basket[manuf][id][3]) {
              productCheckbox.checked = true;
            }

            else {
               productCheckbox.checked = false;
               

            }

            
            productName.innerText = basket[manuf][id][1];
            productName.classList.add("basket-product-name");
            productPrice.innerText = basket[manuf][id][2];
            productQuantity.innerText = basket[manuf][id][0];
            changeQuantityBasketDiv.classList.add("quantity-basket");
            changeQuantityBasketPlus.innerText = "+";
            changeQuantityBasketMinus.innerText = "-";
            deleteFromBasket.innerText = "Delete";
            deleteFromBasket.classList.add("delete");
            deleteFromBasket.addEventListener('click', () => deleteFromBasketF(id, manuf));


            if (basket[manuf][id][3] === true) {
              manufacturerTotal.innerText = Number(manufacturerTotal.innerText) + basket[manuf][id][2] * basket[manuf][id][0];
            }
            
            changeQuantityBasketPlus.addEventListener('click', () => changeQuantityBasketPlusF(id, manuf));
            changeQuantityBasketMinus.addEventListener('click', () => changeQuantityBasketMinusF(id, manuf));
            productCheckbox.addEventListener('change', () => handleProdCheckboxes(productCheckbox, id, manuf));



            productsInBasketList.appendChild(productInBasket);
            productInBasket.appendChild(productCheckbox);
            productInBasket.appendChild(productName);
            productInBasket.appendChild(productPrice);
            productInBasket.appendChild(productQuantity);
            productInBasket.appendChild(changeQuantityBasketDiv);
            changeQuantityBasketDiv.appendChild(changeQuantityBasketPlus);
            changeQuantityBasketDiv.appendChild(changeQuantityBasketMinus);
            productInBasket.appendChild(deleteFromBasket);
            productsInBasketList.after(manufacturerTotalDiv);
            manufacturerTotalDiv.appendChild(manufacturerTotalText);
            manufacturerTotalDiv.appendChild(manufacturerTotal);


    })

      if (tempArr.includes(true)) {
              manufacturerCheckbox.checked = true;
            }

            
            
      else {
              manufacturerCheckbox.checked = false;
            }

      TotalManufSum.innerText = Number(TotalManufSum.innerText) + Number(manufacturerTotal.innerText);
      TotalManufSum.classList.add("basket-total");
      

  })

  document.querySelector(".basket-total").innerHTML = TotalManufSum.innerText;
  

  console.log(basket);

}



function deleteFromBasketF(id, manuf) {
  if (Object.keys(basket[manuf]).length === 1) {
    delete basket[manuf];
  }
  else {
    delete basket[manuf][id];
  }
  renderCart();
  console.log(basket);
}


function changeQuantityBasketPlusF(id, manuf) {
  
  if (basket[manuf][id][0] > 998) {
    basket[manuf][id][0] = 999;
  }

  else {
    basket[manuf][id][0]++;
  }
  
  renderCart();
}

function changeQuantityBasketMinusF(id, manuf) {

  if (basket[manuf][id][0] < 2) {
    basket[manuf][id][0] = 1;
  }

  else {
    basket[manuf][id][0]--;
  }
  
  renderCart();
}


function handleProdCheckboxes(productCheckbox, id, manuf) {

  if (!productCheckbox.checked) {
    basket[manuf][id][3] = false;
    console.log(basket);
  }

  else if (productCheckbox.checked) {
    basket[manuf][id][3] = true;
    console.log(Object.values(basket));
  }

  renderCart();

}

 function handleManufCheckboxes(manufa, manufaCheckbox) {

   if (!manufaCheckbox.checked) {
     Object.values(basket[manufa]).forEach((prod) => prod[3] = false);
   }

   else if (manufaCheckbox.checked) {
    Object.values(basket[manufa]).forEach((prod) => prod[3] = true);
   }



   renderCart();

 }
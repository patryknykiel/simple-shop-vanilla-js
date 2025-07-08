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
        quantityInput.type = "text";
        quantityInput.value = 1;
        changeQuantityPlus.innerText = "+";
        changeQuantityMinus.innerText = "-";
        addToBasket.innerText = "Add to basket";
        addToBasket.classList.add("add-to-basket");

        changeQuantityPlus.addEventListener('click', () => quantityInput.value++);
        changeQuantityMinus.addEventListener('click', () => quantityInput.value--);
        addToBasket.addEventListener('click', () => addProductToBasket(product[1].id, quantityInput.value, product[1].name, product[1].price, product[1].manufacturer));

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
renderCart(basket);


}


function renderCart() {

  

  document.querySelector(".basket-list").innerHTML = null;

  Object.keys(basket).forEach((manuf) => {

    let tempArr = [];

            const newManufacturerInBasket = document.createElement("div");
            const manufacturerCheckbox = document.createElement("input");
            const manufacturerName = document.createElement("p");
            const productsInBasketList = document.createElement("div");
            const manufacturerTotal = document.createElement("p");


            newManufacturerInBasket.classList.add("manufacturer-container");
            manufacturerCheckbox.type = "checkbox";



            
            manufacturerCheckbox.addEventListener('change', () => handleManufCheckboxes(manuf, manufacturerCheckbox));
            manufacturerName.innerText = manuf;
            productsInBasketList.classList.add("products-list");
            manufacturerTotal.innerText = 0;

            document.querySelector(".basket-list").appendChild(newManufacturerInBasket);
            newManufacturerInBasket.appendChild(manufacturerCheckbox);
            newManufacturerInBasket.appendChild(manufacturerName);
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
            productsInBasketList.appendChild(manufacturerTotal);


    })

      if (tempArr.includes(true)) {
              manufacturerCheckbox.checked = true;
            }

            
            
      else {
              manufacturerCheckbox.checked = false;
            }

  })

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
  basket[manuf][id][0]++;
  renderCart();
  console.log(basket);
}

function changeQuantityBasketMinusF(id, manuf) {
  basket[manuf][id][0]--;
  renderCart();
  console.log(basket);
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



 
/*
{
    "Manufacturer 1": {
        "2": [
            "1",
            "Product 2",
            32
        ],
        "9": [
            "1",
            "Product 1",
            23
        ]
    },
    "Manufacturer 2": {
        "3": [
            "1",
            "Product 3",
            323
        ]
    }
}
*/

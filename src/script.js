fetch('../products.json')
  .then(response => response.json())
  .then(data => {
    addProductsToShop(data); 
  })
  .catch(error => {
    console.error('Error loading the JSON file:', error);
  });



function addProductsToShop(data) {

    Object.entries(data.products).forEach((product) => {

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


        productName.innerText = product[0];
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
        changeQuantityPlus.innerText = "+";
        changeQuantityMinus.innerText = "-";
        addToBasket.innerText = "Add to basket";
        addToBasket.classList.add("add-to-basket");


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

    });
};


document.querySelectorAll(".add-to-basket").forEach((b) => b.addEventListener('click', (e) => {
    
    const productName = e.target.parentElement.querySelector(".product-name").innerText;
    const manufacturerName = e.target.parentElement.querySelector(".manufacturer-name").innerText;
    const productPrice = e.target.parentElement.querySelector(".product-price").innerText;
    
    const newDiv = document.createElement("div");
    const pProductName = document.createElement("p");
    const pManufacturerName = document.createElement("p");
    const pproductPrice = document.createElement("p");
    const productQuantity = document.createElement("p");
    const deleteFromBasketButton = document.createElement("button");
    const productCheckbox =  document.createElement("input");
    const manufacturerCheckbox =  document.createElement("input");
    const changeQuantityDiv = document.createElement("div");
    const changeQuantityPlus = document.createElement("button");
    const changeQuantityMinus = document.createElement("button");
    const total = document.createElement("p");

    pProductName.innerText = productName;
    pManufacturerName.innerText = manufacturerName;
    pproductPrice.innerText = productPrice;
    deleteFromBasketButton.innerText = "Delete";
    productCheckbox.type = "checkbox";
    manufacturerCheckbox.type = "checkbox";
    productQuantity.innerText = 1;
    changeQuantityPlus.innerText = "+";
    changeQuantityMinus.innerText = "-";
    total.innerText = "Total";
    //TODO musisz ogarnac zeby ilosc ktora jest po lewej dodwala sie po prawej, to samo z total

    newDiv.classList.add("product-in-basket");
    pManufacturerName.classList.add("manufacturer-name-basket");
    document.querySelector(".basket-list").appendChild(newDiv);
    deleteFromBasketButton.classList.add("delete-from-basket");
    changeQuantityDiv.classList.add("changeQuantity");

    newDiv.appendChild(manufacturerCheckbox);
    newDiv.appendChild(pManufacturerName);
    newDiv.appendChild(productCheckbox);
    newDiv.appendChild(pProductName);
    newDiv.appendChild(pproductPrice);
    newDiv.appendChild(productQuantity);
    newDiv.appendChild(changeQuantityDiv);
    changeQuantityDiv.appendChild(changeQuantityPlus);
    changeQuantityDiv.appendChild(changeQuantityMinus);
    newDiv.appendChild(deleteFromBasketButton);
    newDiv.appendChild(total);

    document.querySelectorAll(".manufacturer-name-basket").forEach((name) => {


    manufacturerInBasket.push(name.innerText);
    console.log(manufacturerInBasket);
   })

    document.querySelectorAll(".delete-from-basket").forEach((b) => b.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    }));
    

    manufacturerInBasket = [];

}));



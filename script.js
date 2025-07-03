document.querySelectorAll(".add-to-basket").forEach((b) => b.addEventListener('click', (e) => {
    
    const productName = e.target.parentElement.querySelector(".product-name").innerText;
    const manufacturerName = e.target.parentElement.querySelector(".manufacturer-name").innerText;


   document.querySelectorAll(".basket-list").forEach((div) => {
    console.log(div.children.querySelector("."));
   })


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

    document.querySelectorAll(".delete-from-basket").forEach((b) => b.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    }));
    

}));



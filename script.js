document.querySelectorAll(".add-to-basket").forEach((b) => b.addEventListener('click', (e) => {
    
    const productName = e.target.parentElement.querySelector(".product-name").innerHTML;
    const manufacturerName = e.target.parentElement.querySelector(".manufacturer-name").innerHTML;
    console.log(manufacturerName);
    console.log(productName);
    
    const newDiv = document.createElement("div");
    const pProductName = document.createElement("p");
    const pManufacturerName = document.createElement("p");
    const deleteFromBasketButton = document.createElement("button");
    const productCheckbox =  document.createElement("input");

    pProductName.innerHTML = productName;
    pManufacturerName.innerHTML = manufacturerName;
    deleteFromBasketButton.innerText = "Delete";
    productCheckbox.type = "checkbox"

    newDiv.classList.add("product-in-basket");
    pManufacturerName.classList.add("manufacturer-name-basket");
    document.querySelector(".basket-list").appendChild(newDiv);
    deleteFromBasketButton.classList.add("delete-from-basket");

    newDiv.appendChild(productCheckbox);
    newDiv.appendChild(pManufacturerName);
    newDiv.appendChild(pProductName);
    newDiv.appendChild(deleteFromBasketButton);

    document.querySelectorAll(".delete-from-basket").forEach((b) => b.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    }));
    

}));



document.querySelectorAll(".add-to-basket").forEach((b) => b.addEventListener('click', (e) => {
    
    const productName = e.target.parentElement.querySelector(".product-name").innerHTML;
    const manufacturerName = e.target.parentElement.querySelector(".manufacturer-name").innerHTML;
    console.log(manufacturerName);
    console.log(productName);
    const productImg = e.target.parentElement.querySelector("img").src;
    
    const newDiv = document.createElement("div");
    const pProductName = document.createElement("p");
    const pManufacturerName = document.createElement("p");
    const img = document.createElement("img");
    const deleteFromBasketButton = document.createElement("button");

    pProductName.innerHTML = productName;
    pManufacturerName.innerHTML = manufacturerName;
    img.src = productImg;
    deleteFromBasketButton.value = "Delete";

    newDiv.classList.add("product-in-basket");
    document.querySelector(".basket-list").appendChild(newDiv);
    deleteFromBasketButton.classList.add("delete-from-basket");

    newDiv.appendChild(img);
    newDiv.appendChild(pProductName);
    newDiv.appendChild(pManufacturerName);
    newDiv.appendChild(deleteFromBasketButton);

    document.querySelectorAll(".delete-from-basket").forEach((b) => b.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    }));
    

}));



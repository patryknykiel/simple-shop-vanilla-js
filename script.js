document.querySelectorAll(".add-to-basket").forEach((b) => b.addEventListener('click', (e) => {
    const deleteFromBasketButton = document.createElement("button");
    deleteFromBasketButton.innerHTML = "Delete";
    deleteFromBasketButton.classList.add("delete-from-basket");
    const productName = e.target.parentElement.querySelector("p").innerHTML;
    const productImg = e.target.parentElement.querySelector("img").src;
    const newDiv = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = productName;
    const img = document.createElement("img");
    img.src = productImg;
    newDiv.classList.add("product-in-basket");
    document.querySelector(".basket-list").appendChild(newDiv);
    newDiv.appendChild(img);
    newDiv.appendChild(p);
    newDiv.appendChild(deleteFromBasketButton);

    document.querySelectorAll(".delete-from-basket").forEach((b) => b.addEventListener('click', (e) => {
    e.target.parentElement.remove();    
}));

}));

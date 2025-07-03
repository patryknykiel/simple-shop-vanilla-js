document.querySelectorAll(".add-to-basket").forEach((b) => b.addEventListener('click', (e) => {
    const productName = e.target.parentElement.querySelector("p").innerHTML;
    const productImg = e.target.parentElement.querySelector("img");
    const newDiv = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = productName;
    const img = document.createElement("img");
    img.src = productImg;
    newDiv.classList.add("product-in-basket")
    document.querySelector(".basket-list").appendChild(newDiv)
    newDiv.appendChild(p)
    newDiv.appendChild(img)

}));


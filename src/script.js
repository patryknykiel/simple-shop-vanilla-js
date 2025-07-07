fetch('../products.json')
  .then(response => response.json())
  .then(data => {
    addProductsToShop(data); 
  })
  .catch(error => {
    console.error('Error loading the JSON file:', error);
  });


function addProductsToShop(data) {

    const manufacturersArray = [];
    const productsArray = [];
    let basket = {};

    


    //tutaj jest wyświetlanie produktów z pliku JSON to działa
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
        quantityInput.value = 1;
        changeQuantityPlus.innerText = "+";
        changeQuantityMinus.innerText = "-";
        addToBasket.innerText = "Add to basket";
        addToBasket.classList.add("add-to-basket");


        changeQuantityPlus.addEventListener('click', () => quantityInput.value++);
        changeQuantityMinus.addEventListener('click', () => quantityInput.value--);



        




        //Dodanie eventu gdy dodaje do koszyka
        //TODO nie musi tworzyc tego zawsze jak wicskam przycisk przeciez nie zawsze dodaje nowy elemnt bo czaedm juz jest na liscie
        addToBasket.addEventListener('click', (e) => {
            // const newItemInBasketDiv = document.createElement("div");
            // const manufacturerCheckbox = document.createElement("input");
            // const manufacturerName = document.createElement("p");
            // const productCheckbox = document.createElement("input");
            // const productName = document.createElement("p");
            // const productPrice = document.createElement("p");
            // const productQuantity = document.createElement("p");
            // const changeQuantityBasketDiv = document.createElement("div");
            // const changeQuantityBasketPlus = document.createElement("button");
            // const changeQuantityBasketMinus = document.createElement("button");
            // const deleteFromBasket = document.createElement("button");
            // const manufacturerTotal = document.createElement("p");


            

            // deleteFromBasket.addEventListener('click', (e) => {
            //   // manufacturersArray.splice(
            //   //   manufacturersArray.indexOf(e.target.parentElement.childNodes[1].innerText), 1);
            //   // productsArray.splice(manufacturersArray.indexOf(e.target.parentElement.childNodes[1].innerText), 1)
            //   // e.target.parentElement.remove();

            // });
        



            //inicjalizacja
            if (manufacturersArray.length === 0) {
                          const newItemInBasketDiv = document.createElement("div");
            const manufacturerCheckbox = document.createElement("input");
            const manufacturerName = document.createElement("p");
            const productCheckbox = document.createElement("input");
            const productName = document.createElement("p");
            const productPrice = document.createElement("p");
            var productQuantity = document.createElement("p");
            const changeQuantityBasketDiv = document.createElement("div");
            const changeQuantityBasketPlus = document.createElement("button");
            const changeQuantityBasketMinus = document.createElement("button");
            const deleteFromBasket = document.createElement("button");
            const manufacturerTotal = document.createElement("p");
               manufacturersArray.push(data.products[e.target.parentElement.childNodes[1].innerText].manufacturer);
               productsArray.push(data.products[e.target.parentElement.childNodes[1].innerText].id);
               manufacturerName.innerText = data.products[e.target.parentElement.childNodes[1].innerText].manufacturer;

              //basket = Object({}, {productID: data.products[e.target.parentElement.childNodes[1].innerText].id, quantity: quantityInput.value});
              //console.log(basket);
              basket = Object.assign({}, {[data.products[e.target.parentElement.childNodes[1].innerText].id]: quantityInput.value});
              console.log(basket);

               productName.innerText = e.target.parentElement.childNodes[1].innerText;
               productPrice.innerText = data.products[e.target.parentElement.childNodes[1].innerText].price;
               manufacturerCheckbox.type = "checkbox";
               productCheckbox.type = "checkbox";
               changeQuantityBasketPlus.innerText = "+";
               changeQuantityBasketMinus.innerText = "-";
               deleteFromBasket.innerText = "Delete";
               productQuantity.innerText = quantityInput.value;
               //productQuantity.innerText = 

               newItemInBasketDiv.classList.add("product-in-basket");
               manufacturerName.classList.add("manufacturer-name-basket");
               changeQuantityBasketDiv.classList.add("change-quantity");
               manufacturerTotal.classList.add("total");

               document.querySelector(".basket-list").appendChild(newItemInBasketDiv);
               newItemInBasketDiv.appendChild(manufacturerCheckbox);
               newItemInBasketDiv.appendChild(manufacturerName);
               newItemInBasketDiv.appendChild(productCheckbox);
               newItemInBasketDiv.appendChild(productName);
               newItemInBasketDiv.appendChild(productPrice);
               newItemInBasketDiv.appendChild(productQuantity);
               newItemInBasketDiv.appendChild(changeQuantityBasketDiv);
               changeQuantityBasketDiv.appendChild(changeQuantityBasketPlus);
               changeQuantityBasketDiv.appendChild(changeQuantityBasketMinus);
               newItemInBasketDiv.appendChild(deleteFromBasket);
               newItemInBasketDiv.appendChild(manufacturerTotal);
            }

            //jest producent nie ma produktu
            else {
              if (manufacturersArray.includes(data.products[e.target.parentElement.childNodes[1].innerText].manufacturer) && 
              !(productsArray.includes(data.products[e.target.parentElement.childNodes[1].innerText].id))) {
                //console.log("TEST");

                basket = Object.assign(basket, {[data.products[e.target.parentElement.childNodes[1].innerText].id]: quantityInput.value});
                console.log(basket);
               
                            const newItemInBasketDiv = document.createElement("div");
            const manufacturerCheckbox = document.createElement("input");
            const manufacturerName = document.createElement("p");
            const productCheckbox = document.createElement("input");
            const productName = document.createElement("p");
            const productPrice = document.createElement("p");
            var productQuantity = document.createElement("p");
            const changeQuantityBasketDiv = document.createElement("div");
            const changeQuantityBasketPlus = document.createElement("button");
            const changeQuantityBasketMinus = document.createElement("button");
            const deleteFromBasket = document.createElement("button");
            const manufacturerTotal = document.createElement("p");

               productsArray.push(data.products[e.target.parentElement.childNodes[1].innerText].id);
               manufacturersArray.push(data.products[e.target.parentElement.childNodes[1].innerText].manufacturer);
               manufacturerName.innerText = data.products[e.target.parentElement.childNodes[1].innerText].manufacturer;

               productName.innerText = e.target.parentElement.childNodes[1].innerText;
               productPrice.innerText = data.products[e.target.parentElement.childNodes[1].innerText].price;
               productCheckbox.type = "checkbox";
               changeQuantityBasketPlus.innerText = "+";
               changeQuantityBasketMinus.innerText = "-";
               deleteFromBasket.innerText = "Delete";
               productQuantity.innerText = quantityInput.value;

               newItemInBasketDiv.classList.add("product-in-basket");
               manufacturerName.classList.add("manufacturer-name-basket");
               changeQuantityBasketDiv.classList.add("change-quantity");
               manufacturerTotal.classList.add("total");

               //tu trzeba cos zmienic 

               document.querySelectorAll(".manufacturer-name-basket").forEach((div) => {
                  if (div.innerText === manufacturerName.innerText) {
                     div.parentElement.after(newItemInBasketDiv);
                     //console.log("test");
                   
               }

               })


               //document.querySelector(".basket-list").appendChild(newItemInBasketDiv);
               newItemInBasketDiv.appendChild(productCheckbox);
               newItemInBasketDiv.appendChild(productName);
               newItemInBasketDiv.appendChild(productPrice);
               newItemInBasketDiv.appendChild(productQuantity);
               newItemInBasketDiv.appendChild(changeQuantityBasketDiv);
               changeQuantityBasketDiv.appendChild(changeQuantityBasketPlus);
               changeQuantityBasketDiv.appendChild(changeQuantityBasketMinus);
               newItemInBasketDiv.appendChild(deleteFromBasket);
               

              }


              //jest producent i produkt 
              else if (manufacturersArray.includes(data.products[e.target.parentElement.childNodes[1].innerText].manufacturer) && 
              productsArray.includes(data.products[e.target.parentElement.childNodes[1].innerText].id)) {
                //TODO tutaj bedziemy zmieniac ilosc ale na razie tego nie mam to zostawiam puste
                //console.log(Object.keys(basket));
                //  Object.keys(basket).forEach((idObj) => {
                //    if(idObj == data.products[e.target.parentElement.childNodes[1].innerText].id) {
                //     basket.idObj = "test";
                //    }
                //  })

                //  console.log


              basket[[data.products[e.target.parentElement.childNodes[1].innerText].id]] = quantityInput.value;
              console.log(basket);
              
              

              

                //basket = Object.assign(basket, {[data.products[e.target.parentElement.childNodes[1].innerText].id]: quantityInput.value});
                //console.log(productQuantity);
              }

              //nie ma producenta, nie ma produktu 
              else {
                            const newItemInBasketDiv = document.createElement("div");
            const manufacturerCheckbox = document.createElement("input");
            const manufacturerName = document.createElement("p");
            const productCheckbox = document.createElement("input");
            const productName = document.createElement("p");
            const productPrice = document.createElement("p");
            var productQuantity = document.createElement("p");
            const changeQuantityBasketDiv = document.createElement("div");
            const changeQuantityBasketPlus = document.createElement("button");
            const changeQuantityBasketMinus = document.createElement("button");
            const deleteFromBasket = document.createElement("button");
            const manufacturerTotal = document.createElement("p");
                 manufacturersArray.push(data.products[e.target.parentElement.childNodes[1].innerText].manufacturer);
                 productsArray.push(data.products[e.target.parentElement.childNodes[1].innerText].id);
               manufacturerName.innerText = data.products[e.target.parentElement.childNodes[1].innerText].manufacturer;

               basket = Object.assign(basket, {[data.products[e.target.parentElement.childNodes[1].innerText].id]: quantityInput.value});
                console.log(basket);
               productName.innerText = e.target.parentElement.childNodes[1].innerText;
               productPrice.innerText = data.products[e.target.parentElement.childNodes[1].innerText].price;
               manufacturerCheckbox.type = "checkbox";
               productCheckbox.type = "checkbox";
               changeQuantityBasketPlus.innerText = "+";
               changeQuantityBasketMinus.innerText = "-";
               deleteFromBasket.innerText = "Delete";
               

               newItemInBasketDiv.classList.add("product-in-basket");
               manufacturerName.classList.add("manufacturer-name-basket");
               changeQuantityBasketDiv.classList.add("change-quantity");
               manufacturerTotal.classList.add("total");

               document.querySelector(".basket-list").appendChild(newItemInBasketDiv);
               newItemInBasketDiv.appendChild(manufacturerCheckbox);
               newItemInBasketDiv.appendChild(manufacturerName);
               newItemInBasketDiv.appendChild(productCheckbox);
               newItemInBasketDiv.appendChild(productName);
               newItemInBasketDiv.appendChild(productPrice);
               newItemInBasketDiv.appendChild(productQuantity);
               newItemInBasketDiv.appendChild(changeQuantityBasketDiv);
               changeQuantityBasketDiv.appendChild(changeQuantityBasketPlus);
               changeQuantityBasketDiv.appendChild(changeQuantityBasketMinus);
               newItemInBasketDiv.appendChild(deleteFromBasket);
               newItemInBasketDiv.appendChild(manufacturerTotal);
              }
            }




              

            
           
            console.log(manufacturersArray);
            console.log(productsArray);

            
            
         
        })


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

    }

);

};








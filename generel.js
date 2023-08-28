fetch("https://kea-alt-del.dk/t7/api/products")
.then(res=>res.json())
.then(showProduct)

function showHProduct(products){
    products.forEach(showProduct)
}

function showProduct(product){
    const template = document.querySelector(".produkt_kolonne").content;
    const copy =  produkt_kolonne.cloneNode(true); 
    copy.querySelector(".navn").textContent = product.brandname;

    copy.querySelector(".alias").textContent = hero.alias;
    copy.querySelector(".origin").textContent = hero.origin;
    copy.querySelector(".måned").textContent = hero.birthday.month;
    copy.querySelector(".dag").textContent = hero.birthday.day;
    copy.querySelector("img").src = hero.image;
    const parent = document.querySelector(".grid");
    parent.appendChild(copy);
}
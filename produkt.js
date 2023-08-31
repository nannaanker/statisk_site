//https://kea-alt-del.dk/t7/api/products/1525
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
.then((response)=> response.json())
.then((data) => showProduct(data));

function showProduct(product) {
    console.log(product);
    document.querySelector(".produkt-oplysninger h2").textContent = product.productdisplayname;
    document.querySelector(".produkt-oplysninger h1").textContent = product.brandname;
    document.querySelector(".pris").textContent = product.price;
    document.querySelector(".description").innerHTML = product.description;
    document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

    
}


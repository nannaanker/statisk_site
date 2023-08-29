fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
.then(res=>res.json())
.then(showProducts)

function showProducts(products){
    products.forEach(showProduct)
    
}

function showProduct(product){
    const template = document.querySelector("template").content;
    const copy =  template.cloneNode(true); 
   
   //find brandname//
    copy.querySelector(".navn").textContent = product.brandname;
   
   //vis hvis udsolgt//
    if(product.soldout){ 
        copy.querySelector(".udsolgt").classList.add("udsolgt_overlay")
    }
    //vis pris//
    copy.querySelector(".pris").textContent = product.price;
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    //vis discount//
    copy.querySelector("span").textContent = product.discount;
    if(product.discount > 0){
        copy.querySelector("span").textContent = product.discount; 
    }

    else{copy.querySelector(".discount_info").remove()};
   
   //hent id info til produkt side//

    copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);

    //sæt det ind// 
    const parent = document.querySelector(".produkt");
    parent.appendChild(copy);
}
const annual = document.querySelector("[data-label=annual]");
const monthly = document.querySelector("[data-label=monthly]");
const priceTags = document.querySelectorAll(".price");
const monthlyPrice = "19.99 24.99 39.99".split(" ");
const annualPrice = "199.99 249.99 399.99".split(" ");
const price = document.querySelector("#price");


annual.addEventListener("click", ()=>{
    price.checked = true;
    checkprice();
});

monthly.addEventListener("click", ()=>{
    price.checked = false;
    checkprice();
});

price.addEventListener("change", ()=>{
    checkprice();
});

function checkprice() {
    if(price.checked) {
        priceTags.forEach((item, index) =>{
            item.textContent = annualPrice[index];
        })
    } else {
        priceTags.forEach((item, index) =>{
            item.textContent = monthlyPrice[index];
        })
    }
}
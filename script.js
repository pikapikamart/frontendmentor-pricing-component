const annual = document.querySelector("#annual");
const monthly = document.querySelector("#monthly");
const priceTags = document.querySelectorAll(".price--change");
const monthlyPrice = "19.99 24.99 39.99".split(" ");
const annualPrice = "199.99 249.99 399.99".split(" ");
let priceFlag = true;


annual.addEventListener("click", ()=>{
    priceFlag = true;
    checkprice();
});

monthly.addEventListener("click", ()=>{
    priceFlag = false;
    checkprice();
});


function checkprice() {
    if(priceFlag) {
        priceTags.forEach((item, index) =>{
            item.textContent = annualPrice[index];
        })
    } else {
        priceTags.forEach((item, index) =>{
            item.textContent = monthlyPrice[index];
        })
    }
}

checkprice();
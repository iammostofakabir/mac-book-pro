// total price function

function totalPrice() {
    // totalPrice = basePrice + memoryCost + storageCost + deliveryCost
    document.getElementById('totalPrice').innerText = parseFloat(document.getElementById('basePrice').innerText) + parseFloat(document.getElementById('memoryCost').innerText) + parseFloat(document.getElementById('storageCost').innerText) + parseFloat(document.getElementById('deliveryCost').innerText);
    // update afterDiscount
    document.getElementById('afterDiscount').innerText = document.getElementById('totalPrice').innerText;
}



// clicked button disable function

function clickButton(){
    for(let i = 0; i < arguments.length; i++){
        if(i==0){
            document.getElementById(arguments[i]).disabled = true;
        }
        else{
            document.getElementById(arguments[i]).disabled = false;
        }
    }
}



// memory section

document.getElementById('baseMemory').addEventListener('click', function () {
    document.getElementById('memoryCost').innerText = 0;
    totalPrice();
    clickButton('baseMemory','extendedMemory');
});

document.getElementById('extendedMemory').addEventListener('click', function () {
    document.getElementById('memoryCost').innerText = 180;
    totalPrice();
    clickButton('extendedMemory','baseMemory');
});



// storage section 

document.getElementById('baseStorage').addEventListener('click', function () {
    document.getElementById('storageCost').innerText = 0;
    totalPrice();
    clickButton('baseStorage','extraStorage','extendedStorage');
});
document.getElementById('extraStorage').addEventListener('click', function () {
    document.getElementById('storageCost').innerText = 100;
    totalPrice();
    clickButton('extraStorage','baseStorage','extendedStorage');
});
document.getElementById('extendedStorage').addEventListener('click', function () {
    document.getElementById('storageCost').innerText = 180;
    totalPrice();
    clickButton('extendedStorage','baseStorage','extraStorage');
});



// delivery section

document.getElementById('freeDelivery').addEventListener('click', function () {
    document.getElementById('deliveryCost').innerText = 0;
    totalPrice();
    clickButton('freeDelivery','expressDelivery');
});

document.getElementById('expressDelivery').addEventListener('click', function () {
    document.getElementById('deliveryCost').innerText = 20;
    totalPrice();
    clickButton('expressDelivery','freeDelivery');
});



// promo section

document.getElementById('promoButton').addEventListener('click', function () {
    if (document.getElementById('promoCode').value == 'stevekaku') {
        document.getElementById('afterDiscount').innerText = parseFloat(document.getElementById('totalPrice').innerText) * 0.8;
        document.getElementById('promoCode').value = '';
        document.getElementById('promoButton').disabled = true;
    }
    else {
        document.getElementById('promoCode').value = '';
    }
})
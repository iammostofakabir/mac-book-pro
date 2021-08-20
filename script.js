// total price function

function totalPrice() {
    // totalPrice = basePrice + memoryCost + storageCost + deliveryCost
    document.getElementById('totalPrice').innerText = parseFloat(document.getElementById('basePrice').innerText) + parseFloat(document.getElementById('memoryCost').innerText) + parseFloat(document.getElementById('storageCost').innerText) + parseFloat(document.getElementById('deliveryCost').innerText);
    // update afterDiscount
    document.getElementById('afterDiscount').innerText = document.getElementById('totalPrice').innerText;
}


// click button function

function cickButton(btn1,btn2){
    document.getElementById(btn).disabled = true;
}



// memory section

document.getElementById('baseMemory').addEventListener('click', function () {
    document.getElementById('memoryCost').innerText = 0;
    totalPrice();

    document.getElementById('baseMemory').disabled = true;
    document.getElementById('extendedMemory').disabled = false;
});

document.getElementById('extendedMemory').addEventListener('click', function () {
    document.getElementById('memoryCost').innerText = 180;
    totalPrice();

    document.getElementById('baseMemory').disabled = false;
    document.getElementById('extendedMemory').disabled = true;
});



// storage section 

document.getElementById('baseStorage').addEventListener('click', function () {
    document.getElementById('storageCost').innerText = 0;
    totalPrice();

    document.getElementById('baseStorage').disabled = true;
    document.getElementById('extraStorage').disabled = false;
    document.getElementById('extendedStorage').disabled = false;
});
document.getElementById('extraStorage').addEventListener('click', function () {
    document.getElementById('storageCost').innerText = 100;
    totalPrice();

    document.getElementById('baseStorage').disabled = false;
    document.getElementById('extraStorage').disabled = true;
    document.getElementById('extendedStorage').disabled = false;
});
document.getElementById('extendedStorage').addEventListener('click', function () {
    document.getElementById('storageCost').innerText = 180;
    totalPrice();

    document.getElementById('baseStorage').disabled = false;
    document.getElementById('extraStorage').disabled = false;
    document.getElementById('extendedStorage').disabled = true;
});



// delivery section

document.getElementById('freeDelivery').addEventListener('click', function () {
    document.getElementById('deliveryCost').innerText = 0;
    totalPrice();

    document.getElementById('freeDelivery').disabled = true;
    document.getElementById('expressDelivery').disabled = false;
});

document.getElementById('expressDelivery').addEventListener('click', function () {
    document.getElementById('deliveryCost').innerText = 20;
    totalPrice();

    document.getElementById('freeDelivery').disabled = false;
    document.getElementById('expressDelivery').disabled = true;
});



// promo section

document.getElementById('promoButton').addEventListener('click', function () {
    if (document.getElementById('promoCode').value == 'stevekaku') {
        document.getElementById('afterDiscount').innerText = parseFloat(document.getElementById('totalPrice').innerText) * 0.8;
        document.getElementById('promoCode').value = '';
    }
    else {
        document.getElementById('promoCode').value = '';
    }
})
document.getElementById('baseMemory').addEventListener('click', function () {
    document.getElementById('memoryCost').innerText = 0;
    document.getElementById('totalPrice').innerText = parseFloat(document.getElementById('memoryCost').innerText) + 1299;

    // let button = document.getElementById('baseMemory');
    // button.disabled = true;
    // let button2 = document.getElementById('extendedMemory');
    // button2.disabled = false;
});
document.getElementById('extendedMemory').addEventListener('click', function () {
    document.getElementById('memoryCost').innerText = 180;
    document.getElementById('totalPrice').innerText = parseFloat(document.getElementById('memoryCost').innerText) + 1299;

    let button = document.getElementById('baseMemory');
    button.disabled = false;
    let button2 = document.getElementById('extendedMemory');
    button2.disabled = true;
});



document.getElementById('baseStorage').addEventListener('click', function () {
    document.getElementById('storageCost').innerText = 0;
    document.getElementById('totalPrice').innerText = parseFloat(document.getElementById('storageCost').innerText) + 1299;

    let button = document.getElementById('baseStorage');
    button.disabled = true;
    let button2 = document.getElementById('extraStorage');
    button2.disabled = false;
    let button3 = document.getElementById('extendedStorage');
    button3.disabled = false;
});
document.getElementById('extraStorage').addEventListener('click', function () {
    document.getElementById('storageCost').innerText = 100;
    document.getElementById('totalPrice').innerText = parseFloat(document.getElementById('storageCost').innerText) + 1299;

    let button = document.getElementById('baseStorage');
    button.disabled = false;
    let button2 = document.getElementById('extraStorage');
    button2.disabled = true;
    let button3 = document.getElementById('extendedStorage');
    button3.disabled = false;
});
document.getElementById('extendedStorage').addEventListener('click', function () {
    document.getElementById('storageCost').innerText = 180;
    document.getElementById('totalPrice').innerText = parseFloat(document.getElementById('storageCost').innerText) + 1299;

    let button = document.getElementById('baseStorage');
    button.disabled = false;
    let button2 = document.getElementById('extraStorage');
    button2.disabled = false;
    let button3 = document.getElementById('extendedStorage');
    button3.disabled = true;
});



document.getElementById('freeDelivery').addEventListener('click', function () {
    document.getElementById('deliveryCost').innerText = 0;
    document.getElementById('totalPrice').innerText = parseFloat(document.getElementById('deliveryCost').innerText) + 1299;

    let button = document.getElementById('freeDelivery');
    button.disabled = true;
    let button2 = document.getElementById('expressDelivery');
    button2.disabled = false;
});
document.getElementById('expressDelivery').addEventListener('click', function () {
    document.getElementById('deliveryCost').innerText = 20;
    document.getElementById('totalPrice').innerText = parseFloat(document.getElementById('deliveryCost').innerText) + 1299;

    let button = document.getElementById('freeDelivery');
    button.disabled = false;
    let button2 = document.getElementById('expressDelivery');
    button2.disabled = true;
});

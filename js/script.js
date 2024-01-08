// redirect if unauthenticated
if(!localStorage.getItem('login')) {
    window.location.href = "login/index.html";
}

let products = [
    {
        "id": 1,
        "imgUrl": "home/img/Rectangle.png",
        "cash": false,
        "rating": 5,
        "title": "Вариативный замок Golden Soft для отеля",
        "newPrice": "33 000₽",
        "oldPrice": "37 000₽"
    },
    {
        "id": 2,
        "imgUrl": "./home/img/Rectangle 1.png",
        "cash": true,
        "rating": 3,
        "title": "Вариативный замок Golden Soft для отеля",
        "newPrice": "33 000₽",
        "oldPrice": "50 000₽"
    },
    {
        "id": 3,
        "imgUrl": "./home/img/Rectangle-2.png",
        "cash": false,
        "rating": 4,
        "title": "Дверной Замок Golden Soft для офиса",
        "newPrice": "35 000₽",
        "oldPrice": "8 000₽"
    },
    {
        "id": 4,
        "imgUrl": "./home/img/Rectangle-3.png",
        "cash": false,
        "rating": 5,
        "title": "Дверной Замок Golden Soft для офиса",
        "newPrice": "33 000₽",
        "oldPrice": "37 000₽"
    }
]

localStorage.setItem('products', JSON.stringify(products))
window.location.href = "home/index.html";



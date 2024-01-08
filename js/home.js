const logoutButton = document.querySelector('.logoutButton')
const minalSection = document.querySelector('.minal_section')
const indexSection = document.querySelector('.index_section')

let products = JSON.parse(localStorage.getItem('products'))
products.map(placeData)

let cardDivs = document.querySelectorAll('.card_div')
cardDivs = [...cardDivs]

// event listeners
cardDivs.map(cardDiv => {
    cardDiv.addEventListener('click', handleEvent)
})
logoutButton.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "../login/index.html";
})

// functions
function placeData(product, index) {
    if(index > 2) return
    let div = document.createElement('div')
    div.dataset.cardId = product.id
    div.className = 'card_div'
    div.innerHTML = `
    <div class="card_list">
        <div class="list_item">
            <div class="list_1">
                <img src="./img/Frame.png" width="20" />
                <h2>В наличии</h2>
            </div>
        <div class="card_2">
            <img src="./img/gift 1.png" width="20" />
            <h3>Подарок</h3>
        </div>
        </div>
            <div class="btn_1">
            <button data-card-id="` + product.id + `" class="btn_btn">SALE</button>
        </div>
    </div>
    <div class="img_img">
        <img src="../` + product.imgUrl + `" width="320" height="320" />
    </div>
    <h4>
        ` + product.title + `
    </h4>
    <span class="span">
        <h2>` + product.newPrice + `</h2>
        <h3>` + product.oldPrice + `</h3>
    </span>`
    minalSection.append(div)
    const secondDiv = div.cloneNode(true)
    const thirdDiv = div.cloneNode(true)
    const fourthDiv = div.cloneNode(true)
    indexSection.append(secondDiv)
    indexSection.append(thirdDiv)
    indexSection.append(fourthDiv)
}

function handleEvent(event) {
    const target = event.target
    const currentTarget = event.currentTarget
    if(!currentTarget.classList.contains('card_div')) return

    let currentProduct
    products.map(product => {
        if(product.id != currentTarget.dataset.cardId) return
        currentProduct = product
    })
    localStorage.setItem('currentProduct', JSON.stringify(currentProduct))
    window.removeEventListener('click', handleEvent)
    window.location.href = "../singleProduct/index.html";
}





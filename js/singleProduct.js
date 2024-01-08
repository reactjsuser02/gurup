const img = document.querySelector('section.container img')
const modalImg = document.querySelector('.modal-body img')
const price = document.querySelector('.my-posst')
const productTitle = document.querySelector('#product h2')
let sizeButtons = document.querySelectorAll('.psize')

let currentProduct = JSON.parse(localStorage.getItem('currentProduct'))

img.src = '../' + currentProduct.imgUrl
modalImg.src = '../' + currentProduct.imgUrl
price.innerHTML = currentProduct.newPrice + '<span class="my-span">' + currentProduct.oldPrice + '</span></p>'
productTitle.innerHTML = 'Golden Soft <br>' + currentProduct.title

sizeButtons = [...sizeButtons]
sizeButtons.map(sizeButton => {
    sizeButton.addEventListener('click', () => {
        sizeButtons.map(sizeBtn => {
            sizeBtn.classList.remove('active')
        })
        sizeButton.classList.add('active')
    })
})




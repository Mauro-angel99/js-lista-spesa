const shop = document.getElementById(`shop`)

const shopElements = [`Uova`, `latte`, `Biscotti`, `Pasta`, `Affettati`, `Formaggio`, `Verdura`, `Frutta`]

let listElement = ``

let i = 0

while (i < shopElements.length) {
    listElement += `<li>${shopElements[i]}</li>`
    i++
}

shop.innerHTML = listElement
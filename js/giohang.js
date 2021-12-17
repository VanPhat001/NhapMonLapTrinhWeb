let basketTable = document.getElementById('basket-table');
let tbody = basketTable.getElementsByTagName('tbody')[0];
tbody.innerHTML = '';

for (const key in localStorage) {
    if (Object.hasOwnProperty.call(localStorage, key)) {
        const quantily = localStorage[key];
        
        if (typeof productList[key] !== "undefined") {
            let product = productList[key];

            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="image">
                    <div class="img-box basket-table__img" style="background-image: url(${product.imageList[0]});"></div>
                </td>
                <td class="name">
                    <p class="basket-table__name">${product.name}</p>
                </td>
                <td class="quantily">
                    <p class="basket-table__quantily">${quantily}</p>
                </td>
                <td class="price">
                    <p class="basket-table__price">${product.price} <u>đ</u></p>
                </td>
                <td class="del">
                    <i class="fas fa-window-close btn basket-table__btn-close"></i>
                </td>
            `;

            tbody.appendChild(tr);

        }
    }
}

$(document).ready(function () {

    $('.btn.basket-table__btn-close').click(function (e) { 
        
        let tr = this.parentNode.parentNode;
        $(tr).remove();
        
    });

});
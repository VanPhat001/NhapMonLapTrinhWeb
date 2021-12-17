const productId = localStorage.getItem('productId');
const product = productList[productId];
console.log(product);

$(document).ready(function () {


    $('.product-full__exchange-name').text(product.name);
    $('.product-full__exchange-price').html(
        product.price + `<u>đ</u> <span class="btn--effect">0% giảm</span>`
    );


    let ratingStr = 'Đánh giá ';
    for (let i = 1; i <= 5; i++) {
        if (i <= product.rate)
            ratingStr += `<i class="fas fa-star star-fill"></i>`;
        else
            ratingStr += `<i class="far fa-star star-no-fill"></i>`
    }
    $('.product-full__rating').html(ratingStr);


    let color = product.like ? '#e30707' : '#000';
    $('.product-full__like .fas.fa-heart').css('color', color);


    $('.product-full__like').click(function (e) {
        product.like = !product.like;
        let color = product.like ? '#e30707' : '#000';
        $('.product-full__like .fas.fa-heart').css('color', color);
    });


    // tăng số lượng sản phẩm khi nhấn nút
    const maxCountProduct = 100;
    $('.btn-product-inc').click(function (e) {
        let countProductBuy = $('.product-full__exchange-input').val();
        countProductBuy++;
        if (countProductBuy > maxCountProduct) countProductBuy = maxCountProduct;
        $('.product-full__exchange-input').val(countProductBuy);
    });


    // giảm số lượng sản phẩm khi nhấn nút
    $('.btn-product-dec').click(function (e) {
        let countProductBuy = $('.product-full__exchange-input').val();

        countProductBuy--;
        if (countProductBuy < 1) countProductBuy = 1;
        $('.product-full__exchange-input').val(countProductBuy);
    });


    // không được nhập kí tự khác số
    // số lượng sản phẩm không được vượt quá giới hạn [1.. maxCountProduct]
    $('.product-full__exchange-input').keypress(function (e) {
        if (e.key < '0' || e.key > '9') return false;
        if (this.value * 10 + e.keyCode - 48 > maxCountProduct) {
            this.value = maxCountProduct;
            return false;
        }
        return true;
    });

});
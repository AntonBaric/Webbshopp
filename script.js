function addToCart() {
    alert('added to cart')
    document.querySelector('.cart>img').src = "images/amount/1.png"
}

function searchButton() {
    var str = "Visit";
    var n = str.search("Visit");
    document.getElementById("demo").innerHTML = n;
}
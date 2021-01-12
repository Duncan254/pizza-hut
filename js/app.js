(function(){

const cartInfo = document.getElementById("cart-info");
const cart = document.getElementById("cart");

cartInfo.addEventListener("click",function(){
    cart.classList.toggle("show-cart");
});

})();


(function(){

    const cartBtn = document.querySelectorAll('.store-item-icon');
    cartBtn.forEach(function(btn){

        btn.addEventListener('click', function(event){
            if(event.target.parentElement.classList.contains ("store-item-icon")){

                let fullpath=event.target.parentElement.previousElementSibling.src;
                let pos = fullpath.indexOf('img') +3;
                let partPath = fullpath.slice(pos);

                const item = {};
                item.img = `img-cart${partPath}`;

                let name = event.target.parentElement.parentElement.nextElemetSibling.children[0].children[0].textCotent;
            }
        });
    });
})();
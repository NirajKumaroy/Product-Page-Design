let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    productImg.src = "images2/gallery-1.jpg";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    productImg.src = "images2/gallery-2.jpg";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    productImg.src = "images2/gallery-3.jpg";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[3].onclick = function(){
    productImg.src = "images2/gallery-4.jpg";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
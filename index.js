const imgBx=document.querySelectorAll('.img-box');
console.log(imgBx);

imgBx.forEach(Element => Element.addEventListener('click', function(){
    Element.classList.toggle('active');
}))


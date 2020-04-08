const horizontal = document.getElementById('button_horizontal');
const vertical = document.getElementById('button_vertical');
const image = document.getElementById('image');

horizontal.addEventListener('click', function(){
    image.classList.toggle("flip_horizontal");
})

vertical.addEventListener('click', function(){
    image.classList.toggle("flip_vertical");
})
'use strict';
const img1el = document.querySelector('.img1');
const img2el = document.querySelector('.img2');
const img3el = document.querySelector('.img3');
const img4el = document.querySelector('.img4');

let index = true;



    img4el.addEventListener('click',function(){
    
        let hide = () => img4el.classList.toggle('hidden');
        img4el.classList.toggle('animate');
        setTimeout(hide,1000)
    
    })
    
    img3el.addEventListener('click',function(){
    
        let hide = () => img3el.classList.toggle('hidden');
        img3el.classList.toggle('animate');
        setTimeout(hide,1000)

    })

    img2el.addEventListener('click',function(){
    
        let hide = () => img2el.classList.toggle('hidden');
        img2el.classList.toggle('animate');
        setTimeout(hide,1000)
    
    })
    
    img1el.addEventListener('click',function(){
    
        let hide = () => img1el.classList.toggle('hidden');
        img1el.classList.toggle('animate');
        setTimeout(hide,1000)
    
    })


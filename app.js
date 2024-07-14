const titulo = document.getElementById('titulo');
const h = document.getElementById('h');
const imagen1 = document.getElementById('imagen1');
const elemento1 = document.getElementById('elemento1');
const elemento2 = document.getElementById('elemento2');
const elemento3 = document.getElementById('elemento3');
const elemento4 = document.getElementById('elemento4');
const elemento5 = document.getElementById('elemento5');
const elemento6 = document.getElementById('elemento6');






function girar(){
    titulo.style.transform = 'scale(1, -1, 1)';
    titulo.style.transition = '5s';
   
}

function girar1(){
   h.style.transform = 'scale(1, -1, 1)';
   h.style.transition = '5s';

}

function girar2(){
    imagen1.style.transform = 'scale(1, -1, 1)';
    imagen1.style.transition = '5s';

}

function girar3(){
    elemento1.style.transform = 'scale(1, -1, 1)';
    elemento1.style.transition = '5s';
}

function girar4(){
    elemento2.style.transform = 'scale(1, -1, 1)';
    elemento2.style.transition = '5s';
}
function girar5(){
    elemento3.style.transform = 'scale(1, -1, 1)';
    elemento3.style.transition = '5s';
}

function girar6(){
    elemento4.style.transform = 'scale(1, -1, 1)';
    elemento4.style.transition = '5s';
}
function girar7(){
    elemento5.style.transform = 'scale(1, -1, 1)';
    elemento5.style.transition = '5s';
}
function girar8(){
    elemento6.style.transform = 'scale(1, -1, 1)';
    elemento6.style.transition = '5s';
}


titulo.addEventListener('mouseleave', ()=>{
    girar();
})
h.addEventListener('mouseleave',()=>{
    girar1();
})

imagen1.addEventListener('mouseleave',()=>{
    girar2();
})
elemento1.addEventListener('mouseleave',()=>{
    girar3();
})
elemento2.addEventListener('mouseleave',()=>{
    girar4();
})
elemento3.addEventListener('mouseleave',()=>{
    girar5();
})
elemento4.addEventListener('mouseleave',()=>{
    girar6();
})
elemento5.addEventListener('mouseleave',()=>{
    girar7();
})
elemento6.addEventListener('mouseleave',()=>{
    girar8();
})



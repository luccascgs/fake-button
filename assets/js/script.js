let nao = document.getElementById('nao');

nao.addEventListener('mouseover', function(){
    let randomTop = Math.floor(Math.random() * (window.innerHeight-320));
    let randomLeft = Math.floor(Math.random() * (window.innerWidth-320));

    nao.style.left= randomLeft+'px';
    nao.style.top = randomTop+'px';
});

nao.addEventListener('click', function(){
    let randomTop = Math.floor(Math.random() * (window.innerHeight-320));
    let randomLeft = Math.floor(Math.random() * (window.innerWidth-320));

    nao.style.left= randomLeft+'px';
    nao.style.top = randomTop+'px';
});

document.getElementById('sim').addEventListener('click', function(){
    alert("Vlw!! :D");
});

const urlParams = new URLSearchParams(window.location.search);
const texto = urlParams.get("texto");

document.getElementsByTagName('h1')[0].innerText = texto ?? "Futzin hoje?";
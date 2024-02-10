var preloader = document.getElementById('preloader');
preloader.style.display = 'flex'; 

setTimeout(function () {
    preloader.classList.add('hidden');
    document.body.style.overflow = 'auto';
}, 2000);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();

const targetId = this.getAttribute('href').substring(1);
const targetElement = document.getElementById(targetId);

if (targetElement) {
window.scrollTo({
  top: targetElement.offsetTop,
  behavior: 'smooth',
});
}
});
});
function enviarFormulario(event) {
event.preventDefault();

    document.getElementById('sobre-carregamento').style.display = 'flex';      
    setTimeout(function () {
        document.getElementById('sobre-carregamento').style.display = 'none';
        setTimeout(function () {
            alert("Dados enviados, obrigado por escolher a T2S!");
        });
    }, 2000);
    document.getElementById('formulario').reset();
}
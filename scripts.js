

document.addEventListener("DOMContentLoaded", function() {
    const botaoEsportivos = document.querySelectorAll('.opcoes button')[1]; // Botão "Esportivos"
    const botaoMostrarTodos = document.querySelectorAll('.opcoes button')[0]; // Botão "Mostrar todos"
    const botaoEconomicos = document.querySelectorAll('.opcoes button')[2]; // Botão "Econômicos"
    const botaoUtilitarios = document.querySelectorAll('.opcoes button')[3]; // Botão "Utilitários"
    const carros = document.querySelectorAll('.itens-opcoes > div');

    botaoEsportivos.addEventListener('click', function() {
        // Oculta todos os carros
        carros.forEach(function(carro) {
            carro.style.display = 'none';
        });

        // Exibe apenas os carros esportivos
        carros.forEach(function(carro) {
            if (carro.classList.contains('bmw') || carro.classList.contains('911') || carro.classList.contains('audi')) {
                carro.style.display = 'block';
            }
        });
    });

    botaoMostrarTodos.addEventListener('click', function() {
        // Exibe todos os carros
        carros.forEach(function(carro) {
            carro.style.display = 'block';
        });
    });

    botaoEconomicos.addEventListener('click', function() {
        // Oculta todos os carros
        carros.forEach(function(carro) {
            carro.style.display = 'none';
        });

        // Exibe apenas o carro econômico (Fiat Mobi)
        document.querySelector('.mobi').style.display = 'block';
        document.querySelector('.renegade').style.display = 'block';
        document.querySelector('.corolla').style.display = 'block';
    });

    botaoUtilitarios.addEventListener('click', function() {
        // Oculta todos os carros
        carros.forEach(function(carro) {
            carro.style.display = 'none';
        });

        // Exibe apenas o carro utilitário (Fiat Fiorino)
        document.querySelector('.fiorino').style.display = 'block';
        document.querySelector('.kia').style.display = 'block';
       
    });
});














let show = true;

const menuContent = document.querySelector(".content");
const menuToggle = menuContent.querySelector(".menu-toggle")


menuToggle.addEventListener("click",() => {

        menuContent.classList.toggle("on", show);
        show = !show


});



const links = document.querySelectorAll('a#link');

for (let a of links) {
    a.addEventListener('click', (event) => {

        event.preventDefault(); // Anula el comportamiendo por defecto de un elemento.

        const card = document.querySelector('.card'); // Busca un elemento por la clase card.

        card.classList.remove('animate__fadeInLeft'); // Quita la animacion de entrada.

        card.classList.add('animate__fadeOutLeft'); // Agrega una animacion de salida.

        // Navega a la pagina del href luego de 500 milisegundos.
        setTimeout(
            function () {
                location.href = a.href;
            },
            700
        );
    });
}
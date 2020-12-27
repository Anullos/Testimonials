var texto11 = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. \n I’m now in the job of my dreams and so excited about the future. ”';
var texto12 = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';
var texto21 = 'Tanya Sinclair';
var texto22 = 'UX Engineer';
var texto31 = 'John Tarkpor';
var texto32 = 'Junior Front-end Developer';
var foto1 = './static/img/image-tanya.jpg';
var foto2 = './static/img/image-john.jpg';

bizq.addEventListener('click', function() {
    if (text1 === texto11) {
        text1 = texto12;
    }
});

function cambiar(direccion) {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');

    const foto = document.getElementById("foto");

    if (direccion === "izquierda") {
        text1.innerText = texto12;
        text2.innerText = texto22;
        text3.innerText = texto32;
        foto.setAttribute("src", foto2);

    } else {
        text1.innerText = texto11;
        text2.innerText = texto21;
        text3.innerText = texto31;
        foto.setAttribute("src", foto1);
    }
}
let app = document.getElementById('typewriter');

let typewriter=new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
.pauseFor(2500)
.typeString('La capital del sol')
.pauseFor(200)
.deleteChars(10)
.start();

function limpiar(){
    document.getElementById("email").value="";//vaciar input
    document.getElementById("nombre").value="";//vaciar input
    document.getElementById("tel").value="";//vaciar input
    document.getElementById("exampleFormControlTextarea1").value="";//vaciar input
}

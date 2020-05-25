function cargar() {
    var hora = new Date().getHours();
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagen');


    msg.innerHTML = `Ahora son las ${hora} horas`


    if (hora < 6 && hora >= 0) {
        console.log('Madrugada');
        img.src = 'img/madrugada.png'
        document.body.style.background = '#1A1B28'
    } else if (hora >= 6 && hora <= 12) {
        console.log('Mañana');
        img.src = 'img/manhana.png'
        document.body.style.background = '#FED501'

    } else if (hora > 12 && hora <= 18) {
        console.log('Tarde');
        img.src = 'img/tarde.png'
        document.body.style.background = '#5A4469'

    } else {
        console.log('Noche');
        img.src = 'img/noche.png'
        document.body.style.background = '#0C141F'

    }
}

//aconsole.log(cargar());
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var display = document.getElementById("display");
let dataUser = { "nombre": "", "apellido": "", "mail": "", "password": "", "date": "", "sistema": "" };


// variables formulario
var nombre = document.getElementById("name");
var apellido = document.getElementById("ape");
var mail = document.getElementById("mail")
var pass = document.getElementById("pass");
var date = document.getElementById("date");


//mostrar y ocultar contenido con una seleccion
var sistema = document.getElementById("sistema");
sistema.addEventListener("change", () => { // cada vez que cambie la lista
    // alert("Programa cambiado")
    var x = document.getElementById("diferente1");
    if (sistema.value == "diferente") {
        x.classList.remove("oculto");
    }
    else {
        x.classList.add("oculto")
    }
});


//Agregar datos
btn.addEventListener("click", () => {



    if ((nombre.value == "") || (apellido.value == 0) || (mail.value == 0) || (pass.value == 0) || (date.value == 0) || (sistema.value == 0)) {
        alert("Campos vacios");
    }
    else {
        dataUser.nombre = nombre.value;
        dataUser.apellido = apellido.value;
        dataUser.mail = mail.value;
        dataUser.password = pass.value;
        dataUser.date = date.value;
        sistema = sistema.value;
        alert("Datos ingresados");
        var x = document.getElementById("diferente1").value; // opcion diferente
        if (sistema == "x") {
            alert("NO ES VALIDA LA SELECCION")
        }
        else {
            dataUser.sistema = sistema;
        }
        if (sistema == "diferente") {
            dataUser.sistema = x;
        }
        verificationName();
        verificationApe();
        verificationMail();
        document.getElementById('informacion').innerHTML = `Los Datos ingresados son: <br> Nombre: ${dataUser.nombre}, <br> Apellido: ${dataUser.apellido}, <br> Correo: ${dataUser.mail},<br> Contraseña: ${dataUser.password}, <br> Fecha: ${dataUser.date}, <br> Sistema operativo: ${dataUser.sistema} `;
        console.log(dataUser)
    }

    var arrayI = document.querySelectorAll('input');
    for (let i = 0; i < arrayI.length; i++) {
        arrayI[i].value = '';
    }

});

//modificar datos
btn1.addEventListener("click", () => {

    if (nombre.value != "" && nombre.value != " " && nombre.value != "  " && nombre.value != "   " && nombre.value != "    " && nombre.value != "     ") {
        alert("Nombre modificado")
        dataUser.nombre = nombre.value;
        verificationName();
    }
    if (apellido.value != "" && apellido.value != " " && apellido.value != "  " && apellido.value != "   " && apellido.value != "    " && apellido.value != "     ") {
        alert("Apellido modificado")
        dataUser.apellido = apellido.value;
      verificationApe();
    }
    if (mail.value != "" && mail.value != " " && mail.value != "  " && mail.value != "   " && mail.value != "    " && mail.value != "     ") {
        alert("E-mail modificado")
        dataUser.mail = mail.value;
        verificationMail();
    }
    if (pass.value != "" && pass.value != " " && pass.value != "  " && pass.value != "   " && pass.value != "    " && pass.value != "     ") {
        alert("Contraseña modificada")
        dataUser.password = pass.value;
    }
    if (date.value != "" && date.value != " " && date.value != "  " && date.value != "   " && date.value != "    " && date.value != "     ") {
        alert("Fecha modificada")
        dataUser.date = date.value;
    }
        var x = document.getElementById("diferente1").value; // opcion diferente
    if (sistema == "x") {
        alert("NO ES VALIDA LA SELECCION")
    }
    else {
        dataUser.sistema = sistema;
    }
    if (sistema == "diferente") {
        dataUser.sistema = x;
    }

    var arrayI = document.querySelectorAll('input');
    for (let i = 0; i < arrayI.length; i++) {
        arrayI[i].value = '';
    }

    document.getElementById('informacion').innerHTML = `Los Datos ingresados son: Nombre: ${dataUser.nombre}, Apellido: ${dataUser.apellido},
    Correo: ${dataUser.mail}, Contraseña: ${dataUser.password}, Fecha: ${dataUser.date}, Sistema operativo: ${dataUser.sistema} `;
    console.log(dataUser)

});


btn2.addEventListener("click", () => {
    index = prompt("¿Que dato desa borrar? \n Seleccione el número correspondiente\n 0. Eliminar todo el objeto \n 1. Nombre \n 2. Apellido \n 3. E-mail \n 4. Contraseña \n 5.Fecha de nacimiento \n 6. Sistema operativo");
    index = index.replace('.', '');
    index = index.replace(',', '');
    index = index.replace(' ', '');
    index = parseInt(index);
    switch (index) {
        case 0:
            dataUser = { "nombre": "", "apellido": "", "mail": "", "password": "", "date": "", "sistema": "" };
            document.getElementById('informacion').innerHTML = `Los Datos ingresados son: Nombre: ${dataUser.nombre}, Apellido: ${dataUser.apellido},
            Correo: ${dataUser.mail}, Contraseña: ${dataUser.password}, Fecha: ${dataUser.date}, Sistema operativo: ${dataUser.sistema} `;
            console.log(dataUser)
            break;
        case 1:
            dataUser.nombre = "";
            document.getElementById('informacion').innerHTML = `Los Datos ingresados son: Nombre: ${dataUser.nombre}, Apellido: ${dataUser.apellido},
            Correo: ${dataUser.mail}, Contraseña: ${dataUser.password}, Fecha: ${dataUser.date}, Sistema operativo: ${dataUser.sistema} `;
            console.log(dataUser)
            break;

        case 2:
            dataUser.apellido = "";
            document.getElementById('informacion').innerHTML = `Los Datos ingresados son: Nombre: ${dataUser.nombre}, Apellido: ${dataUser.apellido},
            Correo: ${dataUser.mail}, Contraseña: ${dataUser.password}, Fecha: ${dataUser.date}, Sistema operativo: ${dataUser.sistema} `;
            console.log(dataUser)
            break;

        case 3:
            dataUser.mail = "";
            document.getElementById('informacion').innerHTML = `Los Datos ingresados son: Nombre: ${dataUser.nombre}, Apellido: ${dataUser.apellido},
            Correo: ${dataUser.mail}, Contraseña: ${dataUser.password}, Fecha: ${dataUser.date}, Sistema operativo: ${dataUser.sistema} `;
            console.log(dataUser)
            break;

        case 4:
            dataUser.password = "";
            document.getElementById('informacion').innerHTML = `Los Datos ingresados son: Nombre: ${dataUser.nombre}, Apellido: ${dataUser.apellido},
            Correo: ${dataUser.mail}, Contraseña: ${dataUser.password}, Fecha: ${dataUser.date}, Sistema operativo: ${dataUser.sistema} `;
            console.log(dataUser)
            break;

        case 5:
            dataUser.date = "";
            document.getElementById('informacion').innerHTML = `Los Datos ingresados son: Nombre: ${dataUser.nombre}, Apellido: ${dataUser.apellido},
            Correo: ${dataUser.mail}, Contraseña: ${dataUser.password}, Fecha: ${dataUser.date}, Sistema operativo: ${dataUser.sistema} `;
            console.log(dataUser)
            break;

        case 6:
            dataUser.sistema = ""; break;
            document.getElementById('informacion').innerHTML = `Los Datos ingresados son: Nombre: ${dataUser.nombre}, Apellido: ${dataUser.apellido},
            Correo: ${dataUser.mail}, Contraseña: ${dataUser.password}, Fecha: ${dataUser.date}, Sistema operativo: ${dataUser.sistema} `;
            console.log(dataUser)
        default:
            document.getElementById('informacion').innerHTML = `Los Datos ingresados son: Nombre: ${dataUser.nombre}, Apellido: ${dataUser.apellido},
            Correo: ${dataUser.mail}, Contraseña: ${dataUser.password}, Fecha: ${dataUser.date}, Sistema operativo: ${dataUser.sistema} `;
            console.log(dataUser)
            break;
    }
});

function verificationMail() {
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(mail.value)) {
        dataUser.mail = mail.value;
    } else {
        alert("El correo tiene un formato incorrecto");
        dataUser.mail = "CORREO NO VALIDO";
    }
}

function verificationName() {
    patronNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    if (patronNombre.test(nombre.value)) {
        dataUser.nombre = nombre.value;
    } else {
        alert(" Nombre inválido")
        dataUser.nombre = "NOMBRE NO VALIDO";
    }
}

function verificationApe() {
    patronNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    if (patronNombre.test(apellido.value)) {
        dataUser.apellido = apellido.value;
    } else {
        alert(" Nombre inválido")
        dataUser.apellido = "APELLIDO NO VALIDO";
    }
}


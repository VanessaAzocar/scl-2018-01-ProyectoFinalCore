window.listaEmpresas = [];
window.onload = (() => {

  const lista = document.getElementById("listaEmpresas");
  fetch('../data/empresas.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        console.log(element.name);
      });
      data.forEach(element => {
        let optionEmpresa = document.createElement('option');
        optionEmpresa.text = element.name;
        lista.add(optionEmpresa);
      });
      console.log("holi");
    })
  });// fin de window onload


const seccionPrincipal = document.getElementById("sectionPrincipal");
const seccionVisitas = document.getElementById("sectionVisitas");
const seccionEncomiedas = document.getElementById("sectionEncomiendas");
const seccionRvaEspacios = document.getElementById("sectionEspacios");

//const btnAtras = document.getElementsByClassName("btnAtras");
const btnVisitas = document.getElementById("btnVisitas");
const btnEncomiedas = document.getElementById("btnEncomiendas");
const btnRvaEspacios = document.getElementById("btnReservaEspacios");

btnVisitas.addEventListener('click', () => {
  seccionPrincipal.style.display = 'none';
  seccionVisitas.style.display = 'block';
  seccionEncomiedas.style.display = 'none';
  seccionRvaEspacios.style.display = 'none';
});

btnEncomiedas.addEventListener('click', () => {
  seccionPrincipal.style.display = 'none';
  seccionVisitas.style.display = 'none';
  seccionEncomiedas.style.display = 'block';
  seccionRvaEspacios.style.display = 'none';
});

btnRvaEspacios.addEventListener('click', () => {
  seccionPrincipal.style.display = 'none';
  seccionVisitas.style.display = 'none';
  seccionEncomiedas.style.display = 'none';
  seccionRvaEspacios.style.display = 'block';
});

const atras=(()=>{
  if (seccionRvaEspacios.style.display = 'block') {
    seccionPrincipal.style.display = 'none';
    seccionVisitas.style.display = 'none';
    seccionEncomiedas.style.display = 'none';
  }
  if (seccionEncomiedas.style.display = 'block') {
    seccionPrincipal.style.display = 'none';
    seccionVisitas.style.display = 'none';
    seccionRvaEspacios.style.display = 'none';
  }
  if (seccionVisitas.style.display = 'block') {
    seccionPrincipal.style.display = 'none';
    seccionRvaEspacios.style.display = 'none';
    seccionEncomiedas.style.display = 'none';
  }
  if (seccionPrincipal.style.display = 'block') {
    seccionEncomiedas.style.display = 'none';
    seccionVisitas.style.display = 'none';
    seccionRvaEspacios.style.display = 'none';
  }

});

/********Pestañas Reserva Espacios*/
const pestIngresoRva = document.getElementById("btnIngresoRva");
const pestHistorialRva = document.getElementById("btnHistoryRva");
const contenidoIngresoRva = document.getElementById("ingresoReserva");
const contenidotHistorialRva = document.getElementById("historyReserva");


pestIngresoRva.addEventListener('click', () => {
  contenidotHistorialRva.style.display = 'none';
  contenidoIngresoRva.style.display = 'block';

});
pestHistorialRva.addEventListener('click', () => {
  contenidotHistorialRva.style.display = 'block';
  contenidoIngresoRva.style.display = 'none';

})
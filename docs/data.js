
// LOGOUT
window.logout = (() => {
  firebase.auth().signOut()
    .then(() => {
      console.log('chao');
    })
    .catch();
});

function saveData() {
  const rutText = inputRut.value;
  const nameLast = inputName.value;
  const mailText = inputEmail.value;
  const patenteText = inputPatente.value;
  const nameVisitText = inputPerson.value;
  const cargoText = inputCargo.value;
  if (rutText === '') {
    errorTxt.innerHTML = '<div> </div>';
    // Limpiar el textarea
    document.getElementById('inputRut').value = '';
  } else {
    const currentUser = firebase.auth().currentUser;
    const rutText = inputRut.value;
    const newVisitKey = firebase.database().ref().child('visits').push().key;
    firebase.database().ref(`visits/${newVisitKey}`).set({
      Rut: rutText,
      name: nameLast,
      nameVisit: nameVisitText,
      email: mailText,
      Patente: patenteText,
      cargo: cargoText,
    });
    // Limpiar el textarea
    document.getElementById('inputRut').value = '';
  }
  saveIntrust();
};

function saveIntrust() {
  const encargoText = inputEncargo.value;
  const obsText = inputObs.value;
  if (encargoText === '') {
    errorTxt.innerHTML = '<div class="alert alert-danger alertConteiner" role="alert" id="errorTxt"> Error: Debes ingresar un rut </div>';
    // Limpiar el textarea
    document.getElementById('inputEncargo').value = '';
  } else {
    const currentUserTwo = firebase.auth().currentUser;
    const encargoText = inputEncargo.value;
    const newInKey = firebase.database().ref().child('intrust').push().key;
    firebase.database().ref(`intrust/${newInKey}`).set({
      creator: currentUserTwo,
      Encomienda: encargoText,
      Observaciones: obsText,
    });
    document.getElementById('inputEncargo').value = '';
  }
};

const reservarEspacio = (() => {
  const rutReserve = inputRutReserva.value;
  const nameReserve = inputNameReserva.value;
  const patenteReserve = inputPatenteReserva.value;
  const espacioReserve = inputEspacioReserva.value;
  const numPersonasReserve = inputPersonasReserva.value;
  const ObservacionesReserve = inputObservaciones.value;

  const customerEmail =  'v.azocar.adasme@gmail.com'; // este seria directamente el email de la administradora del IF

  if (rutReserve === '') {
    inputRutReserva.value = '';
  } else {
    const newReservaKey = firebase.database().ref().child('Reservas').push().key;
    firebase.database().ref(`Reservas/${newReservaKey}`).set({
      Rut: rutReserve,
      name: nameReserve,
      patente: patenteReserve,
      espacio: espacioReserve,
      numPersonas: numPersonasReserve,
      observaciones: ObservacionesReserve
    });

    emailjs.init("user_0nX0E9VcT00Cn5l3Xunq5");

    var template_params = {
      "to_name": `${nameReserve}`,
      "customer_name": `${customerEmail}`,
      "from_name": "MiVisita",
      "to_name": `${nameReserve}`,
      "message_html": `En recepción se ha identificado a la persona: ${nameReserve} con RUT: ${rutReserve} quien reserva el espacio ${espacioReserve} para ${numPersonasReserve} personas ${ObservacionesReserve}`
    }

  var service_id = "gmail";
  var template_id = "mi_visita";
  emailjs.send(service_id, template_id, template_params)
    .then(function(response){
      console.log(response);
    },function(error){
      console.log(error);
    });
   }
  });
  /** ******************************Politica de Privacidad***************************************** */
  window.privacyPolicy = (() => {
    const modal = document.getElementById('modalTerms');
    modal.style.display = 'block';

    modal.innerHTML = `<div></div>`;
  });


/**********************************************Envio Emails*************************************************/


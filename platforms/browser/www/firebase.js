 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBKvB3_WniNPcHQ87ysoTimFZOoSyXjFfk",
    authDomain: "vacunar-b55e8.firebaseapp.com",
    databaseURL: "https://vacunar-b55e8.firebaseio.com",
    projectId: "vacunar-b55e8",
    storageBucket: "gs://vacunar-b55e8.appspot.com/",
    messagingSenderId: "342518552509",
    appId: "1:342518552509:web:ac0c6545e19f18011ae4d4",
    measurementId: "G-3STLYV5VL2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();

  
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
      console.log('hola' + navigator.camera);
  }

  document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(cordova.file);
}





function toggleSignIn() {
  if (firebase.auth().currentUser) {
    // [START signout]
    
    firebase.auth().signOut();
    
    // [END signout]
  } else {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Ingrese un email válido');
      return;
    }
    if (password.length < 4) {
      alert('Ingrese una contraseña válida');
      return;
    }
    // Sign in with email and pass.
    // [START authwithemail]
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña incorrecta');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      document.getElementById('quickstart-sign-in').disabled = false;
      // [END_EXCLUDE]
    });
    // [END authwithemail]
  }
  document.getElementById('quickstart-sign-in').disabled = true;
}
/**
 * Handles the sign up button press.
 */
function handleSignUp() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if (email.length < 4) {
    alert('Ingrese un email válido');
    return;
  }
  if (password.length < 4) {
    alert('Ingrese una contraseña válida');
    return;
  }
  // Sign in with email and pass.
  // [START createwithemail]
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('La contraseña es poco segura');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END createwithemail]
}
/**
 * Sends an email verification to the user.
 */
function sendEmailVerification() {
  // [START sendemailverification]
  firebase.auth().currentUser.sendEmailVerification().then(function() {
    // Email Verification sent!
    // [START_EXCLUDE]
    alert('Email de verificación enviado');
    // [END_EXCLUDE]
  });
  // [END sendemailverification]
}
function sendPasswordReset() {
  var email = document.getElementById('email').value;
  // [START sendpasswordemail]
  firebase.auth().sendPasswordResetEmail(email).then(function() {
    // Password Reset Email Sent!
    // [START_EXCLUDE]
    alert('Email de cambio de contraseña enviado');
    // [END_EXCLUDE]
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END sendpasswordemail];
}
/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
  // Listening for auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function(user) {
    // [START_EXCLUDE silent]
    document.getElementById('quickstart-verify-email').disabled = true;
    // [END_EXCLUDE]
    if (user) {
        location.assign('index.html');
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // [START_EXCLUDE]
      //document.getElementById('quickstart-sign-in-status').textContent = 'Conectado';
      document.getElementById('quickstart-sign-in').textContent = 'Desconectarse';
      //document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
      if (!emailVerified) {
        document.getElementById('quickstart-verify-email').disabled = false;
      }
      // [END_EXCLUDE]
    } else {
      // User is signed out.
      // [START_EXCLUDE]
      //document.getElementById('quickstart-sign-in-status').textContent = 'Desconectado';
      document.getElementById('quickstart-sign-in').textContent = 'Conectarse';
      //document.getElementById('quickstart-account-details').textContent = 'null';
      // [END_EXCLUDE]
    }
    // [START_EXCLUDE silent]
    document.getElementById('quickstart-sign-in').disabled = false;
    // [END_EXCLUDE]
  });
  // [END authstatelistener]
  document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
  document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
  document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
  document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
}
window.onload = function() {
  initApp();
};

function cerrarSesion(){
  firebase.auth().signOut();
  }











//   var vacunaID = document.getElementById("nombrevacuna")
//   var fechaBCG1 = document.getElementById("fechaBCG1")
//   var lugarBCG1 = document.getElementById("lugarBCG1")
//   var prueba = document.getElementsByTagName('input');
  

//   function traerDatos(){
//     document.getElementById("iconoBoton").style.display = "none";
//       var data = {
//           fecha: fechaBCG1.value,
//           lugar: lugarBCG1.value,
//       }
//       db.collection("usuario").doc(vacunaID.title).set(data)
//       .then(function(docRef) {
//        console.log("OK! " + vacunaID.title);
//        }).catch(function(error) {
//        console.log("Error: " + error);
//        })
//   }

//CREAR USUARIO
// el on click para que entre a la camara
// $("#subirFoto").on("click", function () {
//   navigator.camera.getPicture(onSuccess, onFail, {
//       quality: 50,
//       destinationType: Camera.DestinationType.DATA_URL
//   });
// });
// function onSuccess(imageData) {
//   // creamos un id aleatorio de 25 caracteres, super robado de internet xd
//   function idRandom() {
//       var result           = '';
//       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//       var charactersLength = characters.length;
//       for ( var i = 0; i < 25; i++ ) {
//          result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       }
//       return result;
//    }
//   // le asignamos un numero random y le concatenamos el .jpg
//   var nomArchivo = idRandom() + ".jpg";
//   // Hacemos una referencia al storage de firebase
//   var storageRef = firebase.storage().ref();
//   // la referencia al directorio y al nombre del archivo que generamos recien
//   var ref = storageRef.child('images/' + nomArchivo);
//   ref.putString(imageData, 'base64').then(function (snapshot) {
//       console.log('Uploaded a base64 string!');
//   });
// }
// // la funcion de error
// function onFail(message) {
//   alert('Failed because: ' + message);
// }



//asjdbiaskjdbaslfknasjnlfd

// var pictureSource;   // picture source
//     var destinationType; // sets the format of returned value

//     // Wait for device API libraries to load
//     //
//     document.addEventListener("deviceready",onDeviceReady,false);

//     // device APIs are available
//     //
//     function onDeviceReady() {
//         pictureSource=navigator.camera.PictureSourceType;
//         destinationType=navigator.camera.DestinationType;
//     }

//     // Called when a photo is successfully retrieved
//     //
//     function onPhotoDataSuccess(imageData) {
//       // Uncomment to view the base64-encoded image data
//        console.log(imageData);

//       // Get image handle
//       //
//       var smallImage = document.getElementById('smallImage');

//       // Unhide image elements
//       //
//       smallImage.style.display = 'block';

//       // Show the captured photo
//       // The inline CSS rules are used to resize the image
//       //
//       smallImage.src = "data:image/jpeg;base64," + imageData;
//     }

//     // Called when a photo is successfully retrieved
//     //
//     function onPhotoURISuccess(imageURI) {
//       // Uncomment to view the image file URI
//       console.log(imageURI);

//       // Get image handle
//       //
//       var largeImage = document.getElementById('largeImage');

//       // Unhide image elements
//       //
//       largeImage.style.display = 'block';

//       // Show the captured photo
//       // The inline CSS rules are used to resize the image
//       //
//       largeImage.src = imageURI;
//     }

//     // A button will call this function
//     //
//     function capturePhoto() {
//       // Take picture using device camera and retrieve image as base64-encoded string
//       navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
//         destinationType: destinationType.DATA_URL });
//     }

//     // A button will call this function
//     //
//     function capturePhotoEdit() {
//       // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
//       navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
//         destinationType: destinationType.DATA_URL });
//     }

//     // A button will call this function
//     //
//     function getPhoto(source) {
//       // Retrieve image file location from specified source
//       navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
//         destinationType: destinationType.FILE_URI,
//         sourceType: source });
//     }

//     // Called if something bad happens.
//     //
//     function onFail(message) {
//       alert('Failed because: ' + message);
//     }

//SUBIR IMAGENES AL STORAGE

//OBTENER ELEMENTOS
// var uploader = document.getElementById('uploader');
// var fileButton = document.getElementById('fileButton');

// //ESCUCHAR SELECCION DE ARCHIVO
// fileButton.addEventListener('change', function(e) {

//   //OBTENER ARCHIVO
//   var file = e.target.files[0];

//   //CREAR CARPETA STORAGE
//   var storageRef = firebase.storage().ref('fotos/' + file.name);

//   //SUBIR ARCHIVO
//   var task = storageRef.put(file);

//   //BARRITA PROGRESO
//   task.on('state_changed',
  
//   function progress(snapshot) {
//     var percentage = (snapshot.bytesTransferred / 
//       snapshot.totalBytes) * 100;
//       uploader.value = percentage;
//   },

//   function error(err) {
//   },

//   function complete(){
//   }

//   );
// });



//ANDA HERMOSO
//FUNCIÓN PARA GUARDAR EL REGISTRO DE VACUNAS EN BASE DE DATOS
//var coleccion = document.getElementById('nombreUsuario').value;
// var nombre = document.getElementsByTagName('li');
// var inputs = document.getElementsByTagName('input');
// var label = document.getElementsByTagName('label');
// var div = document.getElementsByTagName('div');

// function traerDatos(w,x,y,z){
//     //label[2].style.display = "none";
//     w.display = "none";

//     var data = {
//         nombre: z,
//         fecha: x,
//         lugar: y,
//     }
//     db.collection('usuarios').doc(z).set(data)
//     .then(function(docRef) {
//      console.log("OK! " + z);
//      }).catch(function(error) {
//      console.log("Error: " + error);
//      })
// }


//COLECCION USUARIOS
var mail = document.getElementById('mailUs');
var nombreUs = document.getElementById('nombreUsuario');
var fechaNac = document.getElementById('fechaNac');

function traerDatos2(){
    //label[2].style.display = "none";
    //w.display = "none";

    var dataUs = {
        nombre: nombreUs.value,
        fechaNac: fechaNac.value,
    }
    db.collection('usuarios').doc(mail.value).set(dataUs)
    .then(function(docRef) {
     console.log("OK! " + mail.value);
     }).catch(function(error) {
     console.log("Error: " + error);
     })
}

//COLECCION VACUNAS
var nombre = document.getElementsByTagName('li');
var inputs = document.getElementsByTagName('input');
var label = document.getElementsByTagName('label');
var div = document.getElementsByTagName('div');

function traerDatos(w,x,y,z){
    //label[2].style.display = "none";
    w.display = "none";

    var dataVac = {
        nombre: z,
        fecha: x,
        lugar: y,
    }
    db.collection('usuarios').doc('mmiligaleano@gmail.com').collection('vacunas').doc(z).set(dataVac)
    .then(function(docRef) {
     console.log("OK! " + z);
     }).catch(function(error) {
     console.log("Error: " + error);
     })
}


//LLAMAR A LA BASE Y VOLCAR DATOS CREANDO DINAMICAMENTE ELEMENTOS EN SECCION VACUNAS

var usuario = db.collection("/usuario");
var doc = usuario.doc;//('BCG');

//console.log(usuario);



function crearDin(w, x, y, z){
  //var padre = document.getElementById("datosMENI3basta");
  var padre = document.getElementsByClassName("fechavacunas")[x];
  var anterior = document.getElementsByClassName("listaVacuna")[x];
  var padredelbefore = document.getElementsByClassName("contiene-boton")[x];
  var p = document.createElement("p");
  var a = document.createElement("a");
  a.setAttribute("id", "botonFlecha");
  a.setAttribute("class", "float-right", "btn btn-primary");
  a.setAttribute("data-toggle", "collapse");
  a.setAttribute("href", "#" + w);
  a.setAttribute("role", "button");
  a.setAttribute("aria-expanded", "false");
  a.setAttribute("aria-controls", "collapseExample");
  var icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-angle-down");
  p.appendChild(a);
  a.appendChild(icon);
  padredelbefore.insertBefore(p, anterior);
  var div = document.createElement("div");
  div.setAttribute("id", w);
  div.setAttribute("class", "collapse");
  var ul = document.createElement("ul");
  ul.setAttribute("id", "vacunasDadas");
  var li = document.createElement("li");
  li.setAttribute("id", "hospitales");
  li.setAttribute("class", "float-right");
  li.innerHTML = y;
  var li2 = document.createElement("li");
  li2.setAttribute("id", "fechas");
  li2.innerHTML = z;
  padre.appendChild(div);
  div.appendChild(ul);
  ul.appendChild(li);
  ul.appendChild(li2);
}
//crearDin(nombre, 0, lugar, fecha);


// function mostrarNotas(){
// usuario.get().then(function(querySnapshot){
//   querySnapshot.forEach(function(doc){
//       //console.log(doc);
//       var objeto = doc.data();
//       console.log(doc.data());
//       var lugar = objeto.lugar;
//       var fecha = objeto.fecha;
//       var nombre = objeto.nombre;
//       console.log(nombre);
//       console.log(lugar);
//       console.log(fecha);
//       // for(var i = 0; i <= 53; i++){
//       //   crearDin(objeto.nombre, i, lugar, fecha);
//       // };
//       //crearDin(objeto.nombre[0], 0, lugar, fecha);
//     });
// });

// } mostrarNotas();
// mostrarNotas(1);
// mostrarNotas(2);
// mostrarNotas(3);
// mostrarNotas(4);
// mostrarNotas(5);

// function llamarBCG() {
//   return output =
//   // [START get_multiple]
//   db.collection("usuario").where("nombre", "==", "BCG")
//       .get()
//       .then(function(querySnapshot) {
//           querySnapshot.forEach(function(doc) {
//               // doc.data() is never undefined for query doc snapshots
//               console.log(" => ", doc.data());
//               var objeto = doc.data();
//               var lugar = objeto.lugar;
//               var fecha = objeto.fecha;
//               var nombre = objeto.nombre;
//               crearDin(nombre, 0, lugar, fecha);
//           });
//       })
//       .catch(function(error) {
//           console.log("Error getting documents: ", error);
//       });
//   // [END get_multiple]
// } llamarBCG();

// function llamarHepatitisB() {
//   return output =
//   db.collection("usuario").where("nombre", "==", "HepatitisB")
//       .get()
//       .then(function(querySnapshot) {
//           querySnapshot.forEach(function(doc) {
//               console.log(" => ", doc.data());
//               var objeto = doc.data();
//               var lugar = objeto.lugar;
//               var fecha = objeto.fecha;
//               var nombre = objeto.nombre;
//               crearDin(nombre, 1, lugar, fecha);
//           });
//       })
//       .catch(function(error) {
//           console.log("Error getting documents: ", error);
//       });
// } llamarHepatitisB();

// function Neumococo() {
//   return output =
//   db.collection("usuario").where("nombre", "==", "Neumococo")
//       .get()
//       .then(function(querySnapshot) {
//           querySnapshot.forEach(function(doc) {
//               console.log(" => ", doc.data());
//               var objeto = doc.data();
//               var lugar = objeto.lugar;
//               var fecha = objeto.fecha;
//               var nombre = objeto.nombre;
//               crearDin(nombre, 2, lugar, fecha);
//           });
//       })
//       .catch(function(error) {
//           console.log("Error getting documents: ", error);
//       });
// } Neumococo();



//ESTO ANDA HERMOSO
  // function VolcarDatos(x, y) {
  //   return output =
  //   db.collection("usuario").where("nombre", "==", x)
  //       .get()
  //       .then(function(querySnapshot) {
  //           querySnapshot.forEach(function(doc) {
  //               console.log(" => ", doc.data());
  //               var objeto = doc.data();
  //               var lugar = objeto.lugar;
  //               var fecha = objeto.fecha;
  //               var nombre = objeto.nombre;
  //               crearDin(nombre, y, lugar, fecha);
  //           });
  //       })
  //       .catch(function(error) {
  //           console.log("Error getting documents: ", error);
  //       });
  // } 
  
  // VolcarDatos("BCG", 0);
  // VolcarDatos("HepatitisB", 1);
  // VolcarDatos("Neumococo", 2);
  // VolcarDatos("QP", 3);
  // VolcarDatos("Rota", 4);
  // VolcarDatos("POLIO", 5);
  // VolcarDatos("Meni", 6);
  // VolcarDatos("Neumococo2", 7);
  // VolcarDatos("QP2", 8);
  // VolcarDatos("Rota2", 9);
  // VolcarDatos("Polio2", 10);
  // VolcarDatos("Meni2", 11);
  // VolcarDatos("QP3", 12);
  // VolcarDatos("Polio3", 13);
  // VolcarDatos("Gripe", 14);
  // VolcarDatos("Neumococo3", 15);
  // VolcarDatos("TV", 16);
  // VolcarDatos("Gripe2", 17);
  // VolcarDatos("HepatitisA", 18);
  // VolcarDatos("Meni3", 19);
  // VolcarDatos("Gripe3", 20);
  // VolcarDatos("Varicela", 21);
  // VolcarDatos("CoQP", 22);
  // VolcarDatos("Polio4", 23);
  // VolcarDatos("Gripe4", 24);
  // VolcarDatos("Gripe5", 25);
  // VolcarDatos("FA", 26);
  // VolcarDatos("Gripe6", 27);
  // VolcarDatos("Polio5", 28);
  // VolcarDatos("TVSRP", 29);
  // VolcarDatos("TB", 30);
  // VolcarDatos("Meni4", 31);
  // VolcarDatos("HepatitisB2", 32);
  // VolcarDatos("TVSRP2", 33);
  // VolcarDatos("TB2", 34);
  // VolcarDatos("VPH", 35);
  // VolcarDatos("FA2", 36);
  // VolcarDatos("HepatitisB3", 37);
  // VolcarDatos("TVSRP3", 38);
  // VolcarDatos("DV", 39);
  // VolcarDatos("FHA", 40);
  // VolcarDatos("HepatitisB4", 41);
  // VolcarDatos("TVSRP4", 42);
  // VolcarDatos("DB", 43);
  // VolcarDatos("DV2", 44);
  // VolcarDatos("FHA2", 45);
  // VolcarDatos("HepatitisB5", 46);
  // VolcarDatos("TBA", 47);
  // VolcarDatos("Gripe7", 48);
  // VolcarDatos("HepatitisB6", 49);
  // VolcarDatos("Gripe8", 50);
  // VolcarDatos("TVSRP5", 51);
  // VolcarDatos("DV3", 52);
  


  function VolcarDatos(x, y) {
    return output =
    db.collection('usuarios').doc('mmiligaleano@gmail.com').collection('vacunas').where("nombre", "==", x)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(" => ", doc.data());
                var objeto = doc.data();
                var lugar = objeto.lugar;
                var fecha = objeto.fecha;
                var nombre = objeto.nombre;
                crearDin(nombre, y, lugar, fecha);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
  } 
  
  VolcarDatos("BCG", 0);
  VolcarDatos("HepatitisB", 1);
 VolcarDatos("Neumococo", 2);



// var usuario = db.collection("usuario");
// //var rota = usuario.Rota;
// function mostrarDatos(){
// usuario.get()
// .then(function(querySnapshot) {
// querySnapshot.forEach(function(doc) {
//   var objeto = doc.data();
// console.log("data:" + objeto);
// });
// })
// .catch(function(error) {
// console.log("Error: " , error);
// });
// }
// mostrarDatos();


// var query = usuario.where("lugar", "==", "aca");
// console.log(usuario);
// console.log(query);


    // var div = document.getElementsByTagName('div');
    //div[].getElementsByClassName('fechavacunas');
    //div[]

    // function imprimirVacunas(){ 
    //     return "<divclass='collapse' id='collapseHB1'><ul id=vacunasDadas><li class='float-right' id='hospitales'>" 
    //     +  (y) +  "</li>"    +  "<li id='fechas'>" +  (x)     +  "</li>"     
    //     +  "</ul></div>";
    //     }

    // function buscarenhtml(k) {
    //     var html = imprimirVacunas();
    //     k.getElementsByClassName("fechavacunas").innerHTML = html;
    //     } 
    //     buscarenhtml(k);


//traerDatos(label[2].style, inputs[0].value, inputs[1].value, nombre[0].title)
//traerDatos(label[5].style, inputs[3].value, inputs[4].value, nombre[1].title)
//traerDatos(label[8].style, inputs[6].value, inputs[7].value, nombre[2].title)

//traerDatos(label[11].style, inputs[9].value, inputs[10].value, nombre[3].title)
//traerDatos(label[14].style, inputs[12].value, inputs[13].value, nombre[4].title)
//traerDatos(label[17].style, inputs[15].value, inputs[16].value, nombre[5].title)
//traerDatos(label[20].style, inputs[18].value, inputs[19].value, nombre[6].title)
//traerDatos(label[23].style, inputs[21].value, inputs[22].value, nombre[7].title)

//traerDatos(label[26].style, inputs[24].value, inputs[25].value, nombre[8].title)
//traerDatos(label[29].style, inputs[27].value, inputs[28].value, nombre[9].title)
//traerDatos(label[32].style, inputs[30].value, inputs[31].value, nombre[10].title)
//traerDatos(label[35].style, inputs[33].value, inputs[34].value, nombre[11].title)
//traerDatos(label[38].style, inputs[36].value, inputs[37].value, nombre[12].title)
//traerDatos(label[41].style, inputs[39].value, inputs[40].value, nombre[13].title)
//traerDatos(label[44].style, inputs[42].value, inputs[43].value, nombre[14].title)
//traerDatos(label[47].style, inputs[45].value, inputs[46].value, nombre[15].title)
//traerDatos(label[50].style, inputs[48].value, inputs[49].value, nombre[16].title)
//traerDatos(label[53].style, inputs[51].value, inputs[52].value, nombre[17].title)
//traerDatos(label[56].style, inputs[54].value, inputs[55].value, nombre[18].title)
//traerDatos(label[59].style, inputs[57].value, inputs[58].value, nombre[19].title)
//traerDatos(label[62].style, inputs[60].value, inputs[61].value, nombre[20].title)
//traerDatos(label[65].style, inputs[63].value, inputs[64].value, nombre[21].title)
//traerDatos(label[68].style, inputs[66].value, inputs[67].value, nombre[22].title)
//traerDatos(label[71].style, inputs[69].value, inputs[70].value, nombre[23].title)
//traerDatos(label[74].style, inputs[72].value, inputs[73].value, nombre[24].title)
//traerDatos(label[77].style, inputs[75].value, inputs[76].value, nombre[25].title)
//traerDatos(label[80].style, inputs[78].value, inputs[79].value, nombre[26].title)
//traerDatos(label[83].style, inputs[81].value, inputs[82].value, nombre[27].title)
//traerDatos(label[86].style, inputs[84].value, inputs[85].value, nombre[28].title)
//traerDatos(label[89].style, inputs[87].value, inputs[88].value, nombre[29].title)
//traerDatos(label[92].style, inputs[90].value, inputs[91].value, nombre[30].title)
//traerDatos(label[95].style, inputs[93].value, inputs[94].value, nombre[31].title)
//traerDatos(label[98].style, inputs[96].value, inputs[97].value, nombre[32].title)
//traerDatos(label[101].style, inputs[99].value, inputs[100].value, nombre[33].title)

//traerDatos(label[104].style, inputs[102].value, inputs[103].value, nombre[34].title)
//traerDatos(label[107].style, inputs[105].value, inputs[106].value, nombre[35].title)
//traerDatos(label[110].style, inputs[108].value, inputs[109].value, nombre[36].title)
//traerDatos(label[113].style, inputs[111].value, inputs[112].value, nombre[37].title)
//traerDatos(label[116].style, inputs[114].value, inputs[115].value, nombre[38].title)
//traerDatos(label[119].style, inputs[117].value, inputs[118].value, nombre[39].title)
//traerDatos(label[122].style, inputs[120].value, inputs[121].value, nombre[40].title)
//traerDatos(label[125].style, inputs[123].value, inputs[124].value, nombre[41].title)
//traerDatos(label[128].style, inputs[126].value, inputs[127].value, nombre[42].title)
//traerDatos(label[131].style, inputs[129].value, inputs[130].value, nombre[43].title)
//traerDatos(label[134].style, inputs[132].value, inputs[133].value, nombre[44].title)
//traerDatos(label[137].style, inputs[135].value, inputs[136].value, nombre[45].title)
//traerDatos(label[140].style, inputs[138].value, inputs[139].value, nombre[46].title)

//traerDatos(label[143].style, inputs[141].value, inputs[142].value, nombre[47].title)
//traerDatos(label[146].style, inputs[144].value, inputs[145].value, nombre[48].title)
//traerDatos(label[149].style, inputs[147].value, inputs[148].value, nombre[49].title)
//traerDatos(label[152].style, inputs[150].value, inputs[151].value, nombre[50].title)
//traerDatos(label[155].style, inputs[153].value, inputs[154].value, nombre[51].title)
//traerDatos(label[158].style, inputs[156].value, inputs[157].value, nombre[52].title)

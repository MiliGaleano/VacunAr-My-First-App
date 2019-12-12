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
      console.log('dfg' + cordova.file);
      
//document.getElementById('pdfSave').addEventListener('click', pdfSave, false);

function pdfSavePor() {
 
  let options = {
      documentSize: 'A4',
      type: 'base64',
      fileName: 'misVacunas.pdf'
    }

    pdf.fromData( '<html><h1>Hello World</h1></html>', options)
.then(function(base64){               
  // To define the type of the Blob
  var contentType = "application/pdf";
      
  // if cordova.file is not available use instead :
  // var folderpath = "file:///storage/emulated/0/Download/";
  var folderpath = cordova.file.externalRootDirectory + "Download/"; //you can select other folders
  savebase64AsPDF(folderpath, fileName, base64, contentType);          
}).catch((err)=>console.err(err))

} 
document.getElementById('pdfGuardar').addEventListener('click', pdfSavePor, false);
}

  document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(cordova.file);
}


// function enviarme(){
//   var usermail = sessionStorage.getItem("usermail");
//   var enviar= document.getElementById('enviarme');
//   enviar.setAttribute("href", "mailto:"+ usermail +"?Subject=Mis%20Vacunas&body=Primeras%20horas%0D%0ABCG%20es%20con%20B."");
// }


function toggleSignIn() {
  if (firebase.auth().currentUser) {
    // [START signout]
    
    firebase.auth().signOut();
    
    // [END signout]
  } else {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    sessionStorage.setItem("usermail", email);
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

//COLECCION USUARIOS
var mail = document.getElementById('mailUs');
var nombreUs = document.getElementById('nombreUsuario');
var fechaNac = document.getElementById('fechaNac');

function traerDatos2(){
var usermail = sessionStorage.getItem("usermail");
    var dataUs = {
        nombre: nombreUs.value,
        fechaNac: fechaNac.value,
    }
    db.collection('usuarios').doc(usermail).set(dataUs)
    .then(function(docRef) {
     console.log("OK! " + usermail);
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
    w.display = "none";
    var usermail = sessionStorage.getItem("usermail");

    var dataVac = {
        nombre: z,
        fecha: x,
        lugar: y,
    }
    db.collection('usuarios').doc(usermail).collection('vacunas').doc(z).set(dataVac)
    .then(function(docRef) {
     console.log("OK! " + z);
     }).catch(function(error) {
     console.log("Error: " + error);
     })
}


function crearDin(w, x, y, z){
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

function enviarme(){
  var usermail = sessionStorage.getItem("usermail");
  var enviar= document.getElementById('enviarme');
  enviar.setAttribute("href", "mailto:"+ usermail +"?Subject=Mis%20Vacunas&body=Primeras%20horas%0D%0A"+nombre+"%0D%0A"+fecha+"%20"+lugar);
}

  function VolcarDatos(x, y) {
    var usermail = sessionStorage.getItem("usermail");
    return output =
    db.collection('usuarios').doc(usermail).collection('vacunas').where("nombre", "==", x)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(" => ", doc.data());
                var objeto = doc.data();
                var lugar = objeto.lugar;
                var fecha = objeto.fecha;
                var nombre = objeto.nombre;
                crearDin(nombre, y, lugar, fecha);
                enviarme();
                
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
  } 
  
  VolcarDatos("BCG", 0);
  VolcarDatos("HepatitisB", 1);
  VolcarDatos("Neumococo", 2);
  VolcarDatos("QP", 3);
  VolcarDatos("Rota", 4);
  VolcarDatos("POLIO", 5);
  VolcarDatos("Meni", 6);
  VolcarDatos("Neumococo2", 7);
  VolcarDatos("QP2", 8);
  VolcarDatos("Rota2", 9);
  VolcarDatos("Polio2", 10);
  VolcarDatos("Meni2", 11);
  VolcarDatos("QP3", 12);
  VolcarDatos("Polio3", 13);
  VolcarDatos("Gripe", 14);
  VolcarDatos("Neumococo3", 15);
  VolcarDatos("TV", 16);
  VolcarDatos("Gripe2", 17);
  VolcarDatos("HepatitisA", 18);
  VolcarDatos("Meni3", 19);
  VolcarDatos("Gripe3", 20);
  VolcarDatos("Varicela", 21);
  VolcarDatos("CoQP", 22);
  VolcarDatos("Polio4", 23);
  VolcarDatos("Gripe4", 24);
  VolcarDatos("Gripe5", 25);
  VolcarDatos("FA", 26);
  VolcarDatos("Gripe6", 27);
  VolcarDatos("Polio5", 28);
  VolcarDatos("TVSRP", 29);
  VolcarDatos("TB", 30);
  VolcarDatos("Meni4", 31);
  VolcarDatos("HepatitisB2", 32);
  VolcarDatos("TVSRP2", 33);
  VolcarDatos("TB2", 34);
  VolcarDatos("VPH", 35);
  VolcarDatos("FA2", 36);
  VolcarDatos("HepatitisB3", 37);
  VolcarDatos("TVSRP3", 38);
  VolcarDatos("DV", 39);
  VolcarDatos("FHA", 40);
  VolcarDatos("HepatitisB4", 41);
  VolcarDatos("TVSRP4", 42);
  VolcarDatos("DB", 43);
  VolcarDatos("DV2", 44);
  VolcarDatos("FHA2", 45);
  VolcarDatos("HepatitisB5", 46);
  VolcarDatos("TBA", 47);
  VolcarDatos("Gripe7", 48);
  VolcarDatos("HepatitisB6", 49);
  VolcarDatos("Gripe8", 50);
  VolcarDatos("TVSRP5", 51);
  VolcarDatos("DV3", 52);




//   document.addEventListener("deviceready", function() { 
//     window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

//     console.log('file system open: ' + fs.name);
//     fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

//         console.log("fileEntry is file?" + fileEntry.isFile.toString());
//         // fileEntry.name == 'someFile.txt'
//         // fileEntry.fullPath == '/someFile.txt'
//         writeFile(fileEntry, null);

//     }, onErrorCreateFile);

// }, onErrorLoadFs);





// function writeFile(fileEntry, dataObj) {
//   // Create a FileWriter object for our FileEntry (log.txt).
//   fileEntry.createWriter(function (fileWriter) {

//       fileWriter.onwriteend = function() {
//           console.log("Successful file write...");
//           readFile(fileEntry);
//       };

//       fileWriter.onerror = function (e) {
//           console.log("Failed file write: " + e.toString());
//       };

//       // If data object is not passed in,
//       // create a new Blob instead.
//       if (!dataObj) {
//           dataObj = new Blob(['some file data'], { type: 'text/plain' });
//       }

//       fileWriter.write(dataObj);
//   });
// }




// function readFile(fileEntry) {

//   fileEntry.file(function (file) {
//       var reader = new FileReader();

//       reader.onloadend = function() {
//           console.log("Successful file read: " + this.result);
//           displayFileData(fileEntry.fullPath + ": " + this.result);
//       };

//       reader.readAsText(file);

//   }, onErrorReadFile);
// }

//   });









// var pdfOutput = 'me gusta el arte';
// var usermail = sessionStorage.getItem("usermail");
// savePDF("Vacunas"+usermail+".pdf", pdfOutput);
// console.log(savePDF("Vacunas"+usermail+".pdf", pdfOutput));

// function savePDF(fileName, fileData) {

//   document.addEventListener("deviceready", function() { 
//                 window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

//                     console.log('file system open: ' + fs.name);
//                     fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function 														(fileEntry) {

//                         console.log("fileEntry is file?" + fileEntry.isFile.toString());
//                         // fileEntry.name == 'someFile.txt'
//                         // fileEntry.fullPath == '/someFile.txt'
//                         writeFile(fileEntry, null);

//                     },
//                         console.log("Error DATEI KONNTE NICHT ERSTELLT WERDEN " + fileName),
//                         alert("Datei konnte nicht erstellt werden " + fileName)

//                     );

//                 }, console.log("onErrorLoadFs" + LocalFileSystem.PERSISTENT));


//                 function writeFile(fileEntry, dataObj) {

//                     fileEntry.createWriter(function (fileWriter) {

//                         fileWriter.onwriteend = function() {
//                             console.log("Successful file write..." );
//                             alert("Datei erfolgreich geschrieben" + fileEntry);
//                             readFile(fileEntry);
//                         };

//                         fileWriter.onerror = function (e) {

//                             alert("schreiben schlug fehl: " + e.toString());
//                             console.log("Failed file write: " + e.toString());
//                         };

//                         // If data object is not passed in,
//                         // create a new Blob instead.
//                         if (!dataObj) {
//                             dataObj = new Blob([fileData], { type: 'application/pdf' });
//                         }

//                         fileWriter.write(dataObj);
//                     });
//                 }

//                 function readFile(fileEntry) {

//                     fileEntry.file(function (file) {
//                         var reader = new FileReader();

//                         reader.onloadend = function() {
//                             console.log("Successful file read: ");
//                             //displayFileData(fileEntry.fullPath + ": " + this.result);
//                         };

//                         //reader.readAsText(file);

//                     }, alert(fileEntry + "konnte nicht gelesen werden"));
//                 }


//           }, false);

//         }


// var cordova;
// // document.addEventListener('deviceready',
//   // start using cordova plugin here.

// document.getElementById('pdfSave').addEventListener('click', pdfSave, false);

// function pdfSave() {
//   // start using cordova plugin here.
//   // var usermail = sessionStorage.getItem("usermail");
//   let options = {
//       documentSize: 'A4',
//       type: 'share',
//       fileName: 'misVacunas.pdf'
//     }

//     cordova.plugins.pdf.fromData( '<html><h1>Hello World</h1></html>', options)
// .then((stats)=> console.log('status', stats) )   // ok..., ok if it was able to handle the file to the OS.  
// .catch((err)=>console.err(err))


// }
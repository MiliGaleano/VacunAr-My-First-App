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


var nombre = document.getElementsByTagName('li');
var inputs = document.getElementsByTagName('input');
var label = document.getElementsByTagName('label');
var div = document.getElementsByTagName('div');

function traerDatos(w,x,y,z){
    //label[2].style.display = "none";
    w.display = "none";

    var data = {
        fecha: x,
        lugar: y,
    }
    db.collection("usuario").doc(z).set(data)
    .then(function(docRef) {
     console.log("OK! " + z);
     }).catch(function(error) {
     console.log("Error: " + error);
     })
}




function mostrarNotas(){
db.collection("usuario").get().then(function(querySnapshot){
  querySnapshot.forEach(function(doc){

      var objeto = doc.data();
      console.log(objeto); //muestro por consola para ver que efectivamente funciona.
      // var query = doc.where("lugar", "==", "curuzu");
      // console.log(query);
      
    });
});

} mostrarNotas();


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

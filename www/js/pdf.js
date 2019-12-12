// var app = {
//     // Application Constructor
//     initialize: function() {
//         document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
//     },
//     // deviceready Event Handler
//     // Bind any cordova events here. Common events are:
//     // 'pause', 'resume', etc.
//     onDeviceReady: function() {
//         this.receivedEvent('deviceready');
//     },
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         var parentElement = document.getElementById(id);
//         var listeningElement = parentElement.querySelector('.listening');
//         var receivedElement = parentElement.querySelector('.received');
//         listeningElement.setAttribute('style', 'display:none;');
//         receivedElement.setAttribute('style', 'display:block;');

//         var opts = {
//             type: "share",         //Open a context menu and ask the user what to do next (print, mail, etc..).
//             fileName: 'v8-tutorial.pdf' //it will use this filename as a place-holder
//         }
//         pdf.fromURL('https://cesarvr.io/post/2015-11-20-javascript-v8/', opts)
//         .then((status) => console.log('success->', status))
//         .catch((error) => console.log(error));

//         console.log('Received Event: ' + id);
//     }
// };
// app.initialize();


document.addEventListener('deviceready', function pdfSave(){
    // start using cordova plugin here.
    var usermail = sessionStorage.getItem("usermail");
    let options = {
        documentSize: 'A4',
        type: 'share',
        fileName: 'misVacunas'+usermail+'.pdf'
      }

pdf.fromData( '<html><h1>Hello World</h1></html>', options)
.then((stats)=> console.log('status', stats) )   // ok..., ok if it was able to handle the file to the OS.  
.catch((err)=>console.err(err))


  })
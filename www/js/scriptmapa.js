//ACCEDER A UBICACION DE USUARIO
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("navigator.geolocation works well");
}

var onSuccess = function(position) {
        var lon = position.coords.longitude;
        var lat = position.coords.latitude;
        console.log(lon);
        console.log(lat);
        coords = {lat: lat, lng: lon}
        markerHere = new H.map.Marker({lat: lat, lng: lon});
        map.addObject(markerHere);
        map.setCenter(coords);
        return lon, lat;
};

function onError(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);


var platform = new H.service.Platform({
  'apikey': 'ZN0DVG6NHOjgmKmIRqORIZtGGgQVHMdnSxqdBWX5_2A'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.vector.normal.map,
  {
    zoom: 14,
  });


// Enable the event system on the map instance:
var mapEvents = new H.mapevents.MapEvents(map);

// Add event listener:
map.addEventListener('tap', function(evt) {
  // Log 'tap' and 'mouse' events:
  console.log(evt.type, evt.currentPointer.type); 
});

// Instantiate the default behavior, providing the mapEvents object: 
var behavior = new H.mapevents.Behavior(mapEvents);

  var svgMarkup = '<svg width="24" height="24" ' +
  'xmlns="http://www.w3.org/2000/svg">' +
  '<rect stroke="white" fill="#2c49aa" x="1" y="1" width="22" ' +
  'height="22" /><text x="12" y="18" font-size="12pt" ' +
  'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
  'fill="#8debeb">V</text></svg>';

// Create an icon, an object holding the latitude and longitude, and a marker:
  var icon = new H.map.Icon(svgMarkup),
  markerHGarrahan = new H.map.Marker({lat: -34.629938, lng: -58.394164}, {icon: icon});
  markerHMilitar = new H.map.Marker({lat: -34.570198, lng: -58.435802}, {icon: icon});
  markerHFernandez = new H.map.Marker({lat: -34.581151, lng: -58.407450}, {icon: icon});
  markerHRivadavia = new H.map.Marker({lat: -34.584284, lng: -58.400691}, {icon: icon});
  markerHGutierrez = new H.map.Marker({lat: -34.594709, lng: -58.410835}, {icon: icon});
  markerHItaliano = new H.map.Marker({lat: -34.607265, lng: -58.426453}, {icon: icon});
  markerHAleman = new H.map.Marker({lat: -34.591165, lng: -58.402013}, {icon: icon});
  markerHBritanico = new H.map.Marker({lat: -34.633550, lng: -58.388148}, {icon: icon});
  markerHDurand = new H.map.Marker({lat: -34.609363, lng: -58.437208}, {icon: icon});
  markerHArgerich = new H.map.Marker({lat: -34.627434, lng: -58.365510}, {icon: icon});
  markerHElizalde = new H.map.Marker({lat: -34.628171, lng: -58.376325}, {icon: icon});
  markerHMuñiz = new H.map.Marker({lat: -34.637249, lng: -58.393281}, {icon: icon});
  markerHQuemados = new H.map.Marker({lat: -34.625644, lng: -58.432020}, {icon: icon});
  markerHRamos = new H.map.Marker({lat: -34.617927, lng: -58.409385}, {icon: icon});
  markerHEvita = new H.map.Marker({lat: -34.695821, lng: -58.400214}, {icon: icon});
  markerHLopez = new H.map.Marker({lat: -34.704252, lng: -58.383106}, {icon: icon});
  markerHMelo = new H.map.Marker({lat: -34.726329, lng: -58.385565}, {icon: icon});
  markerHCetrangelo = new H.map.Marker({lat: -34.521698, lng: -58.490160}, {icon: icon});
  markerHFleni = new H.map.Marker({lat: -34.554809, lng: -58.451139}, {icon: icon});
  markerHPirovano = new H.map.Marker({lat: -34.564979, lng: -58.470644}, {icon: icon});
  markerHCurie = new H.map.Marker({lat: -34.606581, lng: -58.432868}, {icon: icon});
  markerHFRoy = new H.map.Marker({lat: -34.595052, lng: -58.436001}, {icon: icon});
  markerHIneba = new H.map.Marker({lat: -34.600051, lng: -58.427021}, {icon: icon});
  markerHGuemes = new H.map.Marker({lat: -34.597216, lng: -58.421700}, {icon: icon});
  markerHStamboulian = new H.map.Marker({lat: -34.596931, lng: -58.434618}, {icon: icon});
  markerHSMedical = new H.map.Marker({lat: -34.596156, lng: -58.425777}, {icon: icon});
  markerHPeron = new H.map.Marker({lat: -34.681519, lng: -58.357692}, {icon: icon});
  markerHSFran = new H.map.Marker({lat: -34.674108, lng: -58.350547}, {icon: icon});
  markerHFiorito = new H.map.Marker({lat: -34.666647, lng: -58.364988}, {icon: icon});
  markerHMelo = new H.map.Marker({lat: -34.725170, lng: -58.384890}, {icon: icon});
  markerHSanjose = new H.map.Marker({lat: -34.168024, lng: -58.949399}, {icon: icon});
  markerHDelta = new H.map.Marker({lat: -34.159488, lng: -58.962960}, {icon: icon});
  markerHErill = new H.map.Marker({lat: -34.342998, lng: -58.790290}, {icon: icon});
  markerHPlaza = new H.map.Marker({lat: -34.348045, lng: -58.793552}, {icon: icon});
  markerHFavaloro = new H.map.Marker({lat: -34.438759, lng: -58.792114}, {icon: icon});
  markerHFalcon = new H.map.Marker({lat: -34.451782, lng: -58.791342}, {icon: icon});
  markerHTortuguitas = new H.map.Marker({lat: -34.464558, lng: -58.731647}, {icon: icon});
  markerHCarrillo = new H.map.Marker({lat: -34.498301, lng: -58.693946}, {icon: icon});
  markerHSantoj = new H.map.Marker({lat: -34.507390, lng: -58.798853}, {icon: icon});
  markerHLarcade = new H.map.Marker({lat: -34.536154, lng: -58.720436}, {icon: icon});
  markerHSabin = new H.map.Marker({lat: -34.760083, lng: -58.631861}, {icon: icon});
  markerHFranchi = new H.map.Marker({lat: -34.760295, lng: -58.620049}, {icon: icon});
  markerHSRoque = new H.map.Marker({lat: -29.793380, lng: -58.051212}, {icon: icon});
  markerHIrastorza = new H.map.Marker({lat: -29.790093, lng: -58.062814}, {icon: icon});
  markerHMilitarCC = new H.map.Marker({lat: -29.789608, lng: -58.072533}, {icon: icon});
  markerHCuruzu = new H.map.Marker({lat: -29.789622, lng: -58.056519}, {icon: icon});
  markerHSCorazon = new H.map.Marker({lat: -27.483354, lng: -58.832306}, {icon: icon});
  markerHRVidal = new H.map.Marker({lat: -27.479537, lng: -58.838354}, {icon: icon});
  markerHSMartin = new H.map.Marker({lat: -27.475617, lng: -58.835718}, {icon: icon});
  markerHCorrientes = new H.map.Marker({lat: -27.471123, lng: -58.834473}, {icon: icon});
  markerHSanJuan = new H.map.Marker({lat: -27.468404, lng: -58.836821}, {icon: icon});
  markerHLlano = new H.map.Marker({lat: -27.471596, lng: -58.810982}, {icon: icon});
  markerHJPablo = new H.map.Marker({lat: -27.476025, lng: -58.817910}, {icon: icon});
  markerHEPeron = new H.map.Marker({lat: -27.489728, lng: -58.942983}, {icon: icon});
  markerHCastelan = new H.map.Marker({lat: -27.445746, lng: -58.966223}, {icon: icon});
  markerHNinos = new H.map.Marker({lat: -27.459515, lng: -58.984076}, {icon: icon});
  markerHPerrando = new H.map.Marker({lat: -27.459724, lng: -58.976759}, {icon: icon});
  markerHPediatrico = new H.map.Marker({lat: -27.456896, lng: -58.976240}, {icon: icon});
  markerHGuemesChaco = new H.map.Marker({lat: -27.447794, lng: -58.981367}, {icon: icon});
  markerHFleitas = new H.map.Marker({lat: -27.415762, lng: -59.031401}, {icon: icon});
  markerHRiachuelo = new H.map.Marker({lat: -27.581739, lng: -58.740189}, {icon: icon});
  markerHCanuelas = new H.map.Marker({lat: -35.025467, lng: -58.730434}, {icon: icon});
  markerHGrierson = new H.map.Marker({lat: -34.920122, lng: -58.390094}, {icon: icon});
  markerHEzeiza = new H.map.Marker({lat: -34.865837, lng: -58.535088}, {icon: icon});
  markerHSMarina = new H.map.Marker({lat: -34.813738, lng: -58.459691}, {icon: icon});
  markerHMelendez = new H.map.Marker({lat: -34.812253, lng: -58.386277}, {icon: icon});
  markerHIMA = new H.map.Marker({lat: -34.800720, lng: -58.397875}, {icon: icon});
  markerHCruce = new H.map.Marker({lat: -34.771734, lng: -58.268949}, {icon: icon});
  markerHMiPueblo = new H.map.Marker({lat: -34.819730, lng: -58.271554}, {icon: icon});
  markerHBoulogne = new H.map.Marker({lat: -34.501615, lng: -58.559290}, {icon: icon});
  markerHSIsidro = new H.map.Marker({lat: -34.477747, lng: -58.509265}, {icon: icon});
  markerHCordero = new H.map.Marker({lat: -34.448507, lng: -58.551745}, {icon: icon});
  markerHDuhau = new H.map.Marker({lat: -34.524255, lng: -58.752728}, {icon: icon});
  markerHZin = new H.map.Marker({lat: -34.496226, lng: -58.708859}, {icon: icon});
  markerHTornu = new H.map.Marker({lat: -34.586158, lng: -58.471503}, {icon: icon});
  markerHVelez = new H.map.Marker({lat: -34.625294, lng: -58.507362}, {icon: icon});
  markerHPinero = new H.map.Marker({lat: -34.644218, lng: -58.453485}, {icon: icon});
  markerHSRosa = new H.map.Marker({lat: -36.623070, lng: -64.291462}, {icon: icon});
  markerHMolas = new H.map.Marker({lat: -36.599815, lng: -64.292513}, {icon: icon});
  markerHEvaPampa = new H.map.Marker({lat: -36.647629, lng: -64.286233}, {icon: icon});
  markerHTaladriz = new H.map.Marker({lat: -36.671230, lng: -64.379926}, {icon: icon});
  markerHBuodo = new H.map.Marker({lat: -37.367483, lng: -64.596889}, {icon: icon});
  markerHVilela = new H.map.Marker({lat: -32.967912, lng: -60.655115}, {icon: icon});
  markerHRosario = new H.map.Marker({lat: -32.974306, lng: -60.645171}, {icon: icon});
  markerHSPena = new H.map.Marker({lat: -32.999518, lng: -60.647110}, {icon: icon});
  markerHAlberdi = new H.map.Marker({lat: -32.895051, lng: -60.690139}, {icon: icon});
  markerHFDiaz = new H.map.Marker({lat: -31.445538, lng: -64.148387}, {icon: icon});
  markerHRawson = new H.map.Marker({lat: -31.429044, lng: -64.169634}, {icon: icon});
  markerHCordoba = new H.map.Marker({lat: -31.411778, lng: -64.189445}, {icon: icon});
  markerHPolicial = new H.map.Marker({lat: -31.424822, lng: -64.224813}, {icon: icon});
  markerHCarrillo = new H.map.Marker({lat: -32.851702, lng: -68.813699}, {icon: icon});
  markerHLLago = new H.map.Marker({lat: -32.872199, lng: -68.863681}, {icon: icon});
  markerHMendoza = new H.map.Marker({lat: -32.905302, lng: -68.782217}, {icon: icon});
  markerHUnzue = new H.map.Marker({lat: -37.977309, lng: -57.585924}, {icon: icon});
  markerHMardel = new H.map.Marker({lat: -37.995134, lng: -57.602783}, {icon: icon});
  markerHSanCaye = new H.map.Marker({lat: -38.039461, lng: -57.551050}, {icon: icon});
  markerHTandil = new H.map.Marker({lat: -37.324417, lng: -59.135533}, {icon: icon});
  markerHVillegas = new H.map.Marker({lat: -37.316543, lng: -59.138990}, {icon: icon});
  markerHSancholuz = new H.map.Marker({lat: -37.552347, lng: -60.797210}, {icon: icon});
  markerHBBlanca = new H.map.Marker({lat: -38.690198, lng: -62.264626}, {icon: icon});
  markerHMatera = new H.map.Marker({lat: -38.721295, lng: -62.280169}, {icon: icon});
  markerHRoldan = new H.map.Marker({lat: -38.959140, lng: -68.085921}, {icon: icon});
  markerHCastro = new H.map.Marker({lat: -38.949652, lng: -68.057148}, {icon: icon});
  markerHAccame = new H.map.Marker({lat: -38.981883, lng: -67.818591}, {icon: icon});
  markerHSanFran = new H.map.Marker({lat: -41.144279, lng: -71.276083}, {icon: icon});
  markerHSanCarlos = new H.map.Marker({lat: -41.132490, lng: -71.320716}, {icon: icon});
  markerHEsquel = new H.map.Marker({lat: -42.918156, lng: -71.315377}, {icon: icon});
  markerHPUnion = new H.map.Marker({lat: -43.310679, lng: -65.044102}, {icon: icon});
  markerHRawson = new H.map.Marker({lat: -43.296176, lng: -65.108320}, {icon: icon});
  markerHCamarones = new H.map.Marker({lat: -44.796335, lng: -65.712894}, {icon: icon});
  markerHRegional = new H.map.Marker({lat: -45.868182, lng: -67.488051}, {icon: icon});
  markerHRioGalle = new H.map.Marker({lat: -51.637960, lng: -69.230634}, {icon: icon});
  markerHUshuaia = new H.map.Marker({lat: -54.833405, lng: -68.348099}, {icon: icon});
  markerHMalvinasArgentinas = new H.map.Marker({lat: -51.692357, lng: -57.868574}, {icon: icon});
  markerHSanLucas = new H.map.Marker({lat: -51.583150, lng: -72.216809}, {icon: icon});
  markerHCalafate = new H.map.Marker({lat: -50.334263, lng: -72.244439}, {icon: icon});
  markerHCanosa = new H.map.Marker({lat: -50.022350, lng: -68.516227}, {icon: icon});
  markerHNatale = new H.map.Marker({lat: -46.595509, lng: -70.922046}, {icon: icon});
  markerHBarros = new H.map.Marker({lat: -29.413505, lng: -66.835369}, {icon: icon});
  markerHMujer = new H.map.Marker({lat: -29.415661, lng: -66.880525}, {icon: icon});
  markerHMotta = new H.map.Marker({lat: -29.168974, lng: -67.488894}, {icon: icon});
  markerHIndep = new H.map.Marker({lat: -27.779157, lng: -64.271005}, {icon: icon});
  markerHSenordelM = new H.map.Marker({lat: -24.782097, lng: -65.415794}, {icon: icon});
  markerHLavalle = new H.map.Marker({lat: -24.184963, lng: -65.301509}, {icon: icon});
  markerHUro = new H.map.Marker({lat: -22.110931, lng: -65.597761}, {icon: icon});




// Add the marker to the map and center the map at the location of the marker:
map.addObject(markerHGarrahan);
map.addObject(markerHMilitar);
map.addObject(markerHFernandez);
map.addObject(markerHRivadavia);
map.addObject(markerHGutierrez);
map.addObject(markerHItaliano);
map.addObject(markerHAleman);
map.addObject(markerHBritanico);
map.addObject(markerHDurand);
map.addObject(markerHArgerich);
map.addObject(markerHElizalde);
map.addObject(markerHMuñiz);
map.addObject(markerHQuemados);
map.addObject(markerHRamos);
map.addObject(markerHEvita);
map.addObject(markerHLopez);
map.addObject(markerHMelo);
map.addObject(markerHCetrangelo);
map.addObject(markerHFleni);
map.addObject(markerHPirovano);
map.addObject(markerHCurie);
map.addObject(markerHFRoy);
map.addObject(markerHIneba);
map.addObject(markerHGuemes);
map.addObject(markerHStamboulian);
map.addObject(markerHSMedical);
map.addObject(markerHPeron);
map.addObject(markerHSFran);
map.addObject(markerHFiorito);
map.addObject(markerHSanjose);
map.addObject(markerHMelo);
map.addObject(markerHDelta);
map.addObject(markerHErill);
map.addObject(markerHPlaza);
map.addObject(markerHFavaloro);
map.addObject(markerHFalcon);
map.addObject(markerHTortuguitas);
map.addObject(markerHCarrillo);
map.addObject(markerHSantoj);
map.addObject(markerHLarcade);
map.addObject(markerHSabin);
map.addObject(markerHFranchi);
map.addObject(markerHSRoque);
map.addObject(markerHIrastorza);
map.addObject(markerHMilitarCC);
map.addObject(markerHCuruzu);
map.addObject(markerHSCorazon);
map.addObject(markerHRVidal);
map.addObject(markerHSMartin);
map.addObject(markerHCorrientes);
map.addObject(markerHSanJuan);
map.addObject(markerHLlano);
map.addObject(markerHJPablo);
map.addObject(markerHEPeron);
map.addObject(markerHCastelan);
map.addObject(markerHNinos);
map.addObject(markerHPerrando);
map.addObject(markerHPediatrico);
map.addObject(markerHGuemesChaco);
map.addObject(markerHFleitas);
map.addObject(markerHRiachuelo);
map.addObject(markerHCanuelas);
map.addObject(markerHGrierson);
map.addObject(markerHEzeiza);
map.addObject(markerHSMarina);
map.addObject(markerHMelendez);
map.addObject(markerHIMA);
map.addObject(markerHCruce);
map.addObject(markerHMiPueblo);
map.addObject(markerHBoulogne);
map.addObject(markerHSIsidro);
map.addObject(markerHCordero);
map.addObject(markerHDuhau);
map.addObject(markerHZin);
map.addObject(markerHTornu);
map.addObject(markerHVelez);
map.addObject(markerHPinero);
map.addObject(markerHSRosa);
map.addObject(markerHMolas);
map.addObject(markerHEvaPampa);
map.addObject(markerHTaladriz);
map.addObject(markerHBuodo);
map.addObject(markerHVilela);
map.addObject(markerHRosario);
map.addObject(markerHSPena);
map.addObject(markerHAlberdi);
map.addObject(markerHFDiaz);
map.addObject(markerHRawson);
map.addObject(markerHCordoba);
map.addObject(markerHPolicial);
map.addObject(markerHCarrillo);
map.addObject(markerHLLago);
map.addObject(markerHMendoza);
map.addObject(markerHUnzue);
map.addObject(markerHMardel);
map.addObject(markerHSanCaye);
map.addObject(markerHTandil);
map.addObject(markerHVillegas);
map.addObject(markerHSancholuz);
map.addObject(markerHBBlanca);
map.addObject(markerHMatera);
map.addObject(markerHRoldan);
map.addObject(markerHCastro);
map.addObject(markerHAccame);
map.addObject(markerHSanFran);
map.addObject(markerHSanCarlos);
map.addObject(markerHEsquel);
map.addObject(markerHPUnion);
map.addObject(markerHRawson);
map.addObject(markerHCamarones);
map.addObject(markerHRegional);
map.addObject(markerHRioGalle);
map.addObject(markerHUshuaia);
map.addObject(markerHMalvinasArgentinas);
map.addObject(markerHSanLucas);
map.addObject(markerHCalafate);
map.addObject(markerHCanosa);
map.addObject(markerHNatale);
map.addObject(markerHBarros);
map.addObject(markerHMujer);
map.addObject(markerHMotta);
map.addObject(markerHIndep);
map.addObject(markerHSenordelM);
map.addObject(markerHLavalle);
map.addObject(markerHUro);
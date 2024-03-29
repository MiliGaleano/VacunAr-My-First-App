//OBTENGO LA FECHA ACTUAL
var hoy = new Date();
var dia = hoy.getDate();
var mesMenos1 = hoy.getMonth();
var mes = mesMenos1+1;
var anio= hoy.getFullYear();
var fecha_actual = String(anio+"-"+mes+"-"+dia);


//LLAMO LA API, FILTRO POR PALABRA 'VACUNAS' Y POR EL DÍA ACTUAL
var url = 'https://newsapi.org/v2/everything?' +
          'q=vacuna&' +
          'from='+ fecha_actual + '&' +
          'sortBy=popularity&' +
          'apiKey=b77e6ef751154c3cb5b7fb5757140754';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        
        return response.json();
    }).then( function(response) {
        
        console.log(response)
      
        //FOR
       for (var i=0; i<response.articles.length; i++) {
            
             function imprimirNoticias(response){
                return response.articles.map(function(noticia) {
            
            return "<div><h2 id='titulo'>" +  (noticia.title) +  "</h2>"    +
            "<p id='contenido'>" +  (noticia.content)     +  "</p>"    +
            "<a id='linkNoticia' href=\"" + noticia.url + "\">" + "Continuar leyendo"     +  "<a></div>"
            ; }).join("");
            }
            novedades(response);
       }

        function novedades(response) {
            var html = imprimirNoticias(response);
            document.getElementById("novedades").innerHTML = html;
          } 
});


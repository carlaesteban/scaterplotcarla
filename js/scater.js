console.log("hola consola");

d3.json("datos.json", function(data){
        
        console.log("hola consola2")
    
        window.data = data
        
        partidos = data.partidos
    
        ancho = 500
        alto = 500
    
        contenedor = d3.selector("#contenedor")
            .append("svg")
            .attr("width", ancho)
            .attr("height", alto)
    
        contenedor
            .selectAll("circle")
            .data(partidos)
            .enter()
            .append("circle")
            //ahora se añaden los círculos
            .attr("cx", function(d) {return d.mediaAutoubicacion})
            .attr("cy", 10)
            .attr("r", 10)
    
    /* 01: crear escala lineal para el "cx", el "domain" es 0-10 y el rango es 0-500
    /* 02: colorear los puntos por su ubicación ideológica, NOTA: attr es fill
    /* 03: crear escala lineal para el "cy" (eje vertical) con la variable "votantes", aplicarla en "cy". Calcular el mínimo y el máximo automáticamente don "d3.extent" */
    /* 04: haz que cuando haga un clik sobre el botón salga una alerta (alert con el nombre del partido)+/
       
       })
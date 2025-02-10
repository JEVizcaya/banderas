function cargarBanderas(){
    fetch("https://restcountries.com/v3.1/all")
    .then(response =>{
        $("#cargando").hide();
        return response.json()})
    .then(data => {
        let banderas = document.getElementById("banderas");
        for (let i = 0; i < data.length; i++) {
            let img = document.createElement("img");
            img.src = data[i].flags.png;
            img.className = "bandera";
            img.alt = data[i].name.common;
            banderas.appendChild(img);
        }
        $(".bandera").click(function(){ 
            alert("El país seleccionado es: " + $(this).attr("alt"));
        })
    })
    .catch(error => console.error(error))
};

setTimeout(cargarBanderas, 5000);
fetch("https://restcountries.com/v3.1/all")
.then(response=>{
    $("#cargando").hide();
    return response.json()})
.them(data=>{
    let banderas=document.getElementById("banderas");
    for (let i=0; i<data.lenght;i++){
        let img=document.createElement("img");
        img.src=data[i].flags.png;
        img.alt=data[i].name.common;
        banderas.appendChild(img);
    }
})
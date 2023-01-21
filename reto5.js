//Agrego las marcas, modelos y años de cada auto//

var marca = [
    "BMW", "BMW", "BMW", "BMW", "BMW",
    "BMW", "BMW", "BMW", "BMW", "BMW",
    "BMW", "BMW", "BMW", "BMW", "BMW",
    "BMW", "BMW"," BMW", "BMW", "BMW",
    "BMW", "BMW", "BMW", "BMW", "BMW",
    "BMW", "BMW", "BMW", "BMW", "BMW",
]

var modelo = [
    "iX", "i4", "i4 M50", "iX3", "X7",
    "X6", "X5", "X5 M", "X4", "X4 M",
    "X3", "X3 M", "X2", "X1", "iX R",
    "X2 M3Gi", "M8 GCC", "M850i XDrive", "S8 Convertible", "M8 CC",
    "M5 C", "M550i xDrive Sedan", "M440i xDrive GC", "M4 Convertible", "M4 CC",
    "M440i Coupe", "M3 Sedan C", "M235i xDrive GC", "i4 M50", "iX3"
]

var annio = [
    "2019", "2019", "2019", "2019", "2019", 
    "2020", "2020", "2020", "2020", "2020", 
    "2021", "2021", "2021", "2021", "2021", 
    "2022", "2022", "2022", "2022", "2022", 
    "2022", "2022", "2022", "2022", "2022", 
    "2023", "2023", "2023", "2023", "2023", 
]
//Despues agregamos la function con sus respestivas nomenclatura//
function auto(marca, modelo, annio){
    this.marca = marca
    this.modelo = modelo
    this.annio = annio
}
//utilizamos for para que nos agg todo automaticamente con el console.log (nuevoAuto)//
for(var i = 0; marca.length > i && modelo.length >  i && annio.length > i; i++){
    var nuevoAuto = new auto(marca[i], modelo[i], annio[i]);
    console.log(nuevoAuto)
}
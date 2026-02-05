// ENCABEZADO
const enc = Vue.createApp({
data(){
return{
titulo:"Radar Espacial(﹙˓ 📟 ˒﹚)",

}
}
});

// FILTRO POR NIVEL
const app1 = Vue.createApp({
data(){
return{
minimo:3,
criminales:[
{nombre:"Zorg", nivel:5},
{nombre:"Thanos", nivel:7},
{nombre:"Maduro", nivel:3},
{nombre:"Galactus", nivel:10},
{nombre:"Omniman", nivel:8}
]
}
},
computed:{
criminalesFiltrados(){
return this.criminales.filter(c => c.nivel >= this.minimo);
}
}
});


const app2 = Vue.createApp({
data(){
return{
buscar:"",
criminales:[
{nombre:"Zorg", planeta:"Marte", imagen:"img/zorg.jpg"},
{nombre:"Thanos", planeta:"Saturno", imagen:"img/Tobat.jpg"},
{nombre:"Maduro", planeta:"Jupiter", imagen:"img/maduro.jpg"},
{nombre:"Galactus", planeta:"Agujero negro", imagen:"img/galactus.jpg"},
{nombre:"Omniman", planeta:"Viltrum", imagen:"img/man.jpg"}
]
}
},
computed:{
criminalesEncontrados(){
return this.criminales.filter(c =>
c.nombre.toLowerCase().includes(this.buscar.toLowerCase())
);
},
total(){
return this.criminalesEncontrados.length;
}
}
});




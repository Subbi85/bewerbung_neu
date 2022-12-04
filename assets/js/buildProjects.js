let array = [];

//Befüllen des Arrays mit 5 einmaligen Zufallszahlen
while (array.length < 5 ){
    let rnd = Math.floor(Math.random()*13);
    if( !array.includes(rnd)){
        array.push (rnd);
    }    
}

//Projektdaten
let projectsJSON = 
[
	{
		title: "DB Museum",
		path: "dbm.png",
        link: "https://dbmuseum.de/",
        text: "",
        system:""
	},
	{
		title: "Grundschule Sendelbach",
		path: "lohr.png",
        link: "https://www.lohr.de/gs-sendelbach/home",
        text: "",
        system:""
	},
	{
		title: "KulturTafel Schweinfurt e.V.",
		path: "kulturtafel.png",
        link: "https://www.kulturtafel-sw.de/",
        text: "",
        system:""
	},
	{
		title: "Netz-Haut GmbH",
		path: "netzhaut.PNG",
        link: "https://www.netzhaut.de/",
        text: "",
        system:""
	},
	{
		title: "Autohaus Pfister",
		path: "pfister.png",
        link: "https://www.autohaus-pfister.de/",
        text: "",
        system:""
	},
	{
		title: "Order and Chaos",
		path: "oac.png",
        link: "https://order-and-chaos.eu/",
        text: "",
        system:""
	},
	{
		title: "DDAC e.V.",
		path: "ddac.png",
        link: "http://ddac.de/",
        text: "",
        system:""
	},
	{
		title: "Erste Bewerbungsseite",
		path: "bewerbung_alt.png",
        link: "https://lars.schleyer-sw.de/diverses/bewerbung/",
        text: "",
        system:""
	},
	{
		title: "Palette Neugebauer",
		path: "palette_neugebauer.png",
        link: "http://www.palette-neugebauer.de/",
        text: "",
        system:""
	},
	{
		title: "Kulturbureau",
		path: "kulturbureau.png",
        link: "https://www.kultur-bureau.de/",
        text: "",
        system:""
	},
	{
		title: "Atelier Winkler",
		path: "atelier_winkler.png",
        link: "https://www.atelier-winkler.de/",
        text: "",
        system:""
	},
    {
		title: "Vom Klempauer Hofsee",
		path: "vom_klempauer_hofsee.png",
        link: "http://vom-klempauer-hofsee.de/",
        text: "",
        system:""
	},
    {
		title: "Baugrund",
		path: "baugrund.png",
        link: "http://baugrund.de/",
        text: "",
        system:""
	}
]

let galeryParent = document.getElementById("projectGalery");

//Erstellen des Listenelements mit den vorher ermittelten Daten
let buildGalerieElement =(data)=>{
    let newLi = document.createElement('li');
    newLi.classList.add("clients-item")

    let a = document.createElement('a');
    a.title = data.title;
    a.href = data.link;
    a.setAttribute("target", "_blank");

    var img = document.createElement('img');
    img.src = './assets/images/projekte/'+data.path;
    a.appendChild(img)

    newLi.appendChild(a);
    galeryParent.append(newLi);
}

for (let i =0; i<array.length; i++){
    buildGalerieElement (projectsJSON[ array[i] ])
}
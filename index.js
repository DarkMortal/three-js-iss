var bMobile =   // will be true if running on a mobile device
  navigator.userAgent.indexOf( "Mobile" ) !== -1 || 
  navigator.userAgent.indexOf( "iPhone" ) !== -1 || 
  navigator.userAgent.indexOf( "Android" ) !== -1 || 
  navigator.userAgent.indexOf( "Windows Phone" ) !== -1 ;

if(bMobile) document.getElementById("canvasOne").style.height = "80vh";
else document.getElementById("canvasOne").style.height = "95vh";

const mymap = L.map('issMap').setView([0, 0], 1);
const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

// Making a marker with a custom icon
const issIcon = L.icon({
    iconUrl: './ISS Model/iss2DImage.png',
    iconSize: [50, 50],
    iconAnchor: [25, 16]
});
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

var wwd = new WorldWind.WorldWindow("canvasOne");

wwd.addLayer(new WorldWind.BMNGOneImageLayer());
//wwd.addLayer(new WorldWind.BMNGLandsatLayer());

//wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.StarFieldLayer());
//wwd.addLayer(new WorldWind.AtmosphereLayer());

var currentPosX = 0;
var currentPosY = 0;

var controlsLayer = new WorldWind.ViewControlsLayer(wwd);
controlsLayer.enabled = true;
wwd.addLayer(controlsLayer);

// Create renderable layer to hold the Collada model.
var modelLayer = new WorldWind.RenderableLayer("ISS");

// Create a Collada loader and direct it to the desired directory and .dae file.
var colladaLoader = new WorldWind.ColladaLoader(new WorldWind.Position(0,0,0));
colladaLoader.init({dirPath: './ISS Model/'});

var issScene = null;
colladaLoader.load('ISS.dae', function (scene) {
    scene.scale = 50000;
    modelLayer.addRenderable(scene); // Add the Collada model to the renderable layer within a callback.
    issScene = scene;
});

var isModelAdded = false;

// To get the satelite data
const getSateliteData = async () => {
    var resp = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        return resp;
      });

    marker.setLatLng([resp.latitude, resp.longitude]);

    let longititude = document.getElementById("longtitude");
    let latitude = document.getElementById("latitude");
    let date = document.getElementById("date");
    let altitude = document.getElementById("altitude");
    let velocity = document.getElementById("velocity");

    let theDate = new Date(resp.timestamp * 1000);
    let dateString = theDate.toGMTString();
    date.innerText = dateString;

    latitude.innerText = parseFloat(resp.latitude.toFixed(4));
    longititude.innerText = parseFloat(resp.longitude.toFixed(4));
    altitude.innerText = parseFloat(resp.altitude.toFixed(4));
    velocity.innerText = parseFloat(resp.velocity.toFixed(4));
    
    // Define a position for locating the model.
    let position = new WorldWind.Position(resp.latitude, resp.longitude, resp.altitude*1000);
    issScene.position = position;

    if(locked.checked){
        let location = new WorldWind.Location(resp.latitude, resp.longitude);
        currentPosX = resp.latitude;
        currentPosY = resp.longitude;
        wwd.goTo(location);
    }
    
    if(!isModelAdded){
        wwd.addLayer(modelLayer);
        mymap.setView([resp.latitude, resp.longitude], 2);
        isModelAdded = true;
    }
};

setInterval(getSateliteData,5000);

var locked = document.getElementById("lock"),
    data = document.getElementById("showData"),
    controls = document.getElementById("showControls");

locked.addEventListener("click",()=>{
    if(locked.checked) wwd.goTo(new WorldWind.Location(currentPosX, currentPosY));
});

data.addEventListener("click",()=>{
    let elm = document.getElementById("container");
    if(data.checked) elm.style.display = "block";
    else elm.style.display = "none";
});

controls.addEventListener("click",()=>{
    controlsLayer.enabled = controls.checked;
});
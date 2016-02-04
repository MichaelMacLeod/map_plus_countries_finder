var GeoLocator = function(map){
  this.map = map,
  this.setMapCentre = function(){
    this.setInfoDisplay("block"); //NEW
    navigator.geolocation.getCurrentPosition(function(position){
      // console.log(position);
      var centre = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.map.setCentre(centre);
      this.setInfoDisplay("none"); //NEW
    }.bind(this));
  },
  this.infoElement = document.getElementById("info"),
  this.setInfoDisplay = function(displayValue){
    this.infoElement.style.display = displayValue;
  }
}
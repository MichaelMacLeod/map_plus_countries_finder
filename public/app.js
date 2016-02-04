window.onload = function () {
    //setup views
    var countrySelectView = new CountrySelectView(document.querySelector('#countries'));
    var countryDetailView = new CountryDetailView(document.querySelector('#info'));

    //link change on select to update detail view
    countrySelectView.onChange = function(country){
      countryDetailView.display(country);
      lastCountry.save(country);
    }
      var centre = {lat: 40.712784, lng: -74.005941};
      var CodeClan = {lat: 55.946803, lng: -3.201632};
      var zoomLevel = 12;
      var map = new Map(centre, zoomLevel);
      // var image: "";
      // map.addMarker(centre, "");
      // map.addMarker(CodeClan, "");
      map.bindClick();
      // var locator = new GeoLocator(map);
      // locator.setMapCentre();

      map.addInfoWindow(centre, "<h1>HELLOOOOO?</h1>");
    

    //setup country list model
    var world = new CountryList();

    //update views on data update
    world.onUpdate = function(countries){
      countrySelectView.populate(countries);
      var savedCountry = lastCountry.get();
      if(savedCountry){
        countrySelectView.setSelectedIndex(savedCountry.index);
        countryDetailView.display(savedCountry);
      }

    };

    //get data from server
    world.populate();

};
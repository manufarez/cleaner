function city2country(a) {
  var response=Maps.newGeocoder()
    .reverseGeocode(lat(a),long(a));
  var cleaned = response.results[0].formatted_address.split(",");
  return cleaned[cleaned.length - 1];
}
function lat(pointa) {
 var response = Maps.newGeocoder()
     .geocode(pointa);
  return response.results[0].geometry.location.lat
}
function long(pointa) {
  var response = Maps.newGeocoder()
     .geocode(pointa);
  return response.results[0].geometry.location.lng
}

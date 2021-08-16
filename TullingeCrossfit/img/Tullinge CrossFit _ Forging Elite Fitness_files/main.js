//Lägga till karta
function initMap() {
  //platsen
  const loc = { lat: 59.209381, lng: 17.921714 };

  //Centrera platsen på kartan
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}

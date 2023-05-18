function initMap() {
  $.ajax({
    url: 'http://localhost:3000/pontos',
    method: 'GET',
    contentType: 'application/json',
    cache: false,
    success: function (response) {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -8.292707418668344, lng: -35.9835018804858},
        zoom: 13
      });
      response.data.forEach(ponto => {
        marker = new google.maps.Marker({
          position: {lat: ponto.lat, lng: ponto.lng},
          map: map,
          title: ponto.title
        });
      });
    },
    error: function (xhr, status, error) {
      console.log('Ocorreu um erro. Código: ' + xhr.status + error);
    }
  });
}
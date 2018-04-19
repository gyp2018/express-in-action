$(function() {
  const $h1 = $('h1');
  const $btn = $('button.btn')

  $btn.on('click', function(event) {
    const latitude = event.target.dataset.latitude;
    const longitude = event.target.dataset.longitude;

    $h1.text('Loading...');

    $.ajax({
      url: '/forecast?' + $.param({ latitude, longitude }),
      dataType: 'json',
    }).done(function(data) {
      $h1.html('Temperature : ' + data.temperature + '&#176;');
    }).fail(function() {
      $h1.text('Error!');
    });
  });
});

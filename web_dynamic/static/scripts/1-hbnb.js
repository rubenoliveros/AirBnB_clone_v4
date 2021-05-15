$(document).ready(function () {
  const amenitiesIdList = {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).prop('checked') == true) {
      console.log('hoalaa');
      amenitiesIdList[$('input').attr('data-name')] = $('input').attr('data-id');
    } else if ($(this).prop('checked') == false) {
      delete amenitiesIdList[$('input').attr('data-name')];
    }
    $.each(amenitiesIdList, function (key, value) {
      $('.amenities h4').append(key + ' ');
    });
  });
});

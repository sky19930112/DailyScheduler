// getting current time from moment.js
$('#currentDay').text(moment().format('dddd, MMMM Do'));

// setup the time blocks with past, present, and future
function timeZone() {
    var presentHour = moment().hours();

    $('.time-block').each(function () {
      var block = parseInt($(this).attr('id'));
      if (block < presentHour) {
        $(this).addClass('past');
      } else if (block === presentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
timeZone();

// setup the local storage to save contents
$(document).ready(function () {
    $('.saveBtn').on('click', function () {
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
      localStorage.setItem(time, value);
    });
  
    $('#08 .description').val(localStorage.getItem('08'));
    $('#09 .description').val(localStorage.getItem('09'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
  });
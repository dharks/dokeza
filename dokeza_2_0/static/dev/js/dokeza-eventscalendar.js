// (function() {
//   $('.dz-events__calender').fullCalendar({
//     header: {
//       left: 'prev,next today',
//       center: 'title',
//       right: '',
//     },
//     editable: false,
//     navLinks: true,
//     eventLimit: true,
//     events: {
//       url: '/api/public-participation/events',
//     },
//     loading(bool) {
//       $('.dz-events__loading').toggle(bool);
//     },
//   });
// })();
document.addEventListener("DOMContentLoaded", function() {
  if (window.location.hostname == "localhost") {
    eventsUrl = "http://localhost:8800/api/public-participation/events";
  } else if (window.location.hostname == "192.168.100.82") {
    eventsUrl = "http://192.168.100.82:8000/api/public-participation/events"; 
  } else if (window.location.hostname == "staging-dokeza.mzalendo.com") {
    eventsUrl =
      "https://staging-dokeza.mzalendo.com/api/public-participation/events";
  } else if (window.location.hostname == "dokeza.mzalendo.com") {
    eventsUrl = "https://dokeza.mzalendo.com/api/public-participation/events";
  }
  var calendarEl = document.getElementById("dz-events-calender");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: eventsUrl,
    height: "100%"
  });
  calendar.render();
});

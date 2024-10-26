document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        { title: 'Event 1', start: '2024-11-01' },
        { title: 'Event 2', start: '2024-11-05', end: '2024-11-07' },
        { title: 'Event 3', start: '2024-11-09T12:30:00' }
      ]
    });
    calendar.render();
  });
  
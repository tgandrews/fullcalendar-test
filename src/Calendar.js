import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const date = new Date("2020-12-31");
const calendarEvents = [
  {
    start: new Date("2020-12-31T09:00:00.000Z"),
    end: new Date("2020-12-31T09:15:00.000Z"),
    title: "09:00AM",
  },
];

const Calendar = () => (
  <FullCalendar
    views={{
      default: {
        type: "timeGridWeek",
        duration: { days: 7 },
      },
    }}
    allDaySlot={false}
    headerToolbar={false}
    plugins={[timeGridPlugin]}
    events={calendarEvents}
    eventOverlap={false}
    displayEventTime={false}
    slotDuration="00:30:00"
    initialDate={date}
    firstDay={1}
  />
);

export default Calendar;

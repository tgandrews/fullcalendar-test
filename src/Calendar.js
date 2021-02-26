import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const date = new Date("2021-01-01");
const calendarEvents = [
  {
    display: "background",
    start: new Date("2020-12-31T09:00:00.000Z"),
    end: new Date("2020-12-31T13:00:00.000Z"),
  },
  {
    start: new Date("2020-12-31T09:00:00.000Z"),
    end: new Date("2020-12-31T09:15:00.000Z"),
    title: "09:00AM",
  },
  {
    start: new Date("2020-12-31T09:15:00.000Z"),
    end: new Date("2020-12-31T09:30:00.000Z"),
    title: "09:15AM",
  },
  {
    start: new Date("2020-12-31T09:30:00.000Z"),
    end: new Date("2020-12-31T09:45:00.000Z"),
    title: "09:30AM",
  },
  {
    display: "background",
    start: new Date("2021-01-01T09:00:00.000Z"),
    end: new Date("2021-01-01T19:00:00.000Z"),
  },
  {
    start: new Date("2021-01-01T09:00:00.000Z"),
    end: new Date("2021-01-01T09:15:00.000Z"),
    title: "09:00AM",
  },
  {
    start: new Date("2021-01-01T09:15:00.000Z"),
    end: new Date("2021-01-01T09:30:00.000Z"),
    title: "09:15AM",
  },
  {
    start: new Date("2021-01-01T09:30:00.000Z"),
    end: new Date("2021-01-01T09:45:00.000Z"),
    title: "09:30AM",
  },
  {
    start: new Date("2021-01-01T10:00:00.000Z"),
    end: new Date("2021-01-01T10:15:00.000Z"),
    title: "10:00AM",
  },
  {
    start: new Date("2021-01-01T10:15:00.000Z"),
    end: new Date("2021-01-01T10:30:00.000Z"),
    title: "10:15AM",
  },
  {
    start: new Date("2021-01-01T10:30:00.000Z"),
    end: new Date("2021-01-01T10:45:00.000Z"),
    title: "10:30AM",
  },
  {
    start: new Date("2021-01-01T10:45:00.000Z"),
    end: new Date("2021-01-01T11:00:00.000Z"),
    title: "11:00AM",
  },
  {
    start: new Date("2021-01-01T14:00:00.000Z"),
    end: new Date("2021-01-01T14:15:00.000Z"),
    title: "2:00PM",
  },
  {
    start: new Date("2021-01-01T14:15:00.000Z"),
    end: new Date("2021-01-01T14:30:00.000Z"),
    title: "2:15PM",
  },
  {
    start: new Date("2021-01-01T14:30:00.000Z"),
    end: new Date("2021-01-01T14:45:00.000Z"),
    title: "2:30PM",
  },
  {
    start: new Date("2021-01-01T14:45:00.000Z"),
    end: new Date("2021-01-01T15:00:00.000Z"),
    title: "2:45PM",
  },
  {
    start: new Date("2021-01-01T15:00:00.000Z"),
    end: new Date("2021-01-01T15:15:00.000Z"),
    title: "3:00PM",
  },
  {
    start: new Date("2021-01-01T15:15:00.000Z"),
    end: new Date("2021-01-01T15:30:00.000Z"),
    title: "3:15PM",
  },
  {
    start: new Date("2021-01-01T15:30:00.000Z"),
    end: new Date("2021-01-01T15:45:00.000Z"),
    title: "3:30PM",
  },
  {
    start: new Date("2021-01-01T15:45:00.000Z"),
    end: new Date("2021-01-01T16:00:00.000Z"),
    title: "3:45PM",
  },
];
const color = "#2A92FA";

const Calendar = () => (
  <FullCalendar
    views={{
      default: {
        type: "timeGridWeek",
        duration: { days: 7 },
      },
    }}
    // ref={calendarRef}
    allDaySlot={false}
    headerToolbar={false}
    viewClassNames="availability-calendar"
    plugins={[timeGridPlugin]}
    events={calendarEvents}
    eventOverlap={false}
    displayEventTime={false}
    eventMouseEnter={() => {}}
    eventClick={() => {}}
    eventMouseLeave={() => {}}
    slotDuration="00:30:00"
    scrollTime="08:00:00"
    height={600}
    initialDate={date}
    eventBackgroundColor={color}
    eventBorderColor={color}
    firstDay={1}
    // eventClassNames={lessonStartDateTime ? "active" : ""}
    // slotLabelContent={props => <SlotLabel {...props} />}
    // dayHeaderContent={props => (
    //   <DayHeader {...props} workingDays={[0, 1, 2, 3, 4, 5, 6]} />
    // )}
  />
);

export default Calendar;

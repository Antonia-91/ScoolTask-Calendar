//https://fullcalendar.io/docs/react
// https://www.npmjs.com/package/react-modal
// https://www.npmjs.com/package/react-datetime
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React from "react";
//import Datetime from "react-datetime";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({ tasks }) => {
  const calendarRef = React.createRef();

  //   const onEventAddes = (tasks) => {
  //     let calendarApi = calendarRef.current.getApi();
  //     calendarApi.addEvent(tasks);
  //   };

  const clickHandler = (dateClickInfo, tasks) => {
    console.log(dateClickInfo.jsEvent, tasks);
  };

  function renderEventContent(tasks) {
    console.log(tasks);
    return <div style={{ color: "blue", cursor: "pointer"}}>{tasks.event.title}</div>;
  }
  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={tasks}
        dateClick={clickHandler}
        eventContent={renderEventContent}
      />
    </div>
  );
};

export default Calendar;

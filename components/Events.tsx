import React, { useEffect, useState } from "react";
import { getEvents } from "../api/events";
import { Event } from "../types";

export const Events = () => {
  const [events, setEvents] = useState<Event[] | null>([]);
  useEffect(() => {
    getEvents().then(({ events: evts }) => {
      setEvents(evts);
    });
  }, []);

  return (
    <div>
      {events?.map((event) => (
        <div key={event.id}>
          <p>Date de l event : {event.eventDate}</p>
          <p>Note de la journée : {event.rating}</p>
        </div>
      ))}
    </div>
  );
};

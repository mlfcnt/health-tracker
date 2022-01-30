import React from "react";
import { createEvent, createEventDto } from "../api/events";

export const NewEvent = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { eventDate, screenTime, rating, workTime } = e.target;

    const newEvent: createEventDto = {
      eventDate: eventDate?.value || new Date(),
      rating: rating.value,
      screen_time: screenTime.value,
      work_time: workTime.value,
    };

    createEvent(newEvent);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="eventDate">Date de l entrée</label>
      <br />
      <input type="date" name="eventDate" id="eventDate" />
      <br />
      <label htmlFor="screenTime">
        Temps passé devant un écran (en heures)
      </label>
      <br />
      <input type="number" name="screenTime" id="screenTime" min={0} />
      <br />
      <label htmlFor="workTime">Temps passé au travail (en heures)</label>
      <br />
      <input type="number" name="workTime" id="workTime" min={0} />
      <br />
      <label htmlFor="rating">Note de la journée</label>
      <br />
      <input type="number" name="rating" id="rating" min={0} max={10} />
      <br />
      <button type="submit">Valider la saisie</button>
    </form>
  );
};

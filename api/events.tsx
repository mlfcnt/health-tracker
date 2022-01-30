import { Event } from "../types";
import { supabase } from "../utils/supabaseClient";

export const getEvents = async () => {
  const { data: events, error } = await supabase
    .from<Event>("event")
    .select("*");

  return {
    events,
    error,
  };
};

export type createEventDto = Omit<
  Event,
  "user_id" | "created_at" | "id" | "deleted_at"
>;

export const createEvent = async (event: createEventDto) => {
  //! todo pg types
  const { data, error } = await supabase.from<Event>("event").insert([
    {
      eventDate: event.eventDate,
      screen_time: event?.screen_time,
      work_time: event?.work_time,
      rating: event.rating,
      user_id: supabase.auth.user()?.id,
    },
  ]);
  console.log({ data, error });
};

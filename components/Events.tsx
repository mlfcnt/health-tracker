import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getEvents } from "../api/events";
import { Event } from "../types";

export const Events = () => {
  const [events, setEvents] = useState<Event[] | null>([]);
  useEffect(() => {
    getEvents().then(({ events: evts }) => {
      setEvents(evts);
    });
  }, []);

  if (!events) return null;

  return (
    <LineChart
      width={600}
      height={300}
      data={events}
      style={{ marginTop: "30px" }}
    >
      <Line type="monotone" dataKey="rating" stroke="#EFD9C1" strokeWidth={2} />
      <Line type="monotone" dataKey="work_time" stroke="#ccc" />
      <Line type="monotone" dataKey="screen_time" stroke="#000" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="eventDate" format={"asdas"} />
      <YAxis />
      <Tooltip />
      <Legend
        width={1000}
        wrapperStyle={{
          top: 300,
          right: 0,
          backgroundColor: "#f5f5f5",
          border: "1px solid #d5d5d5",
          borderRadius: 3,
          lineHeight: "40px",
        }}
      />
    </LineChart>
  );
};

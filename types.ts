export type Event = {
  id: string;
  eventDate: Date;
  screen_time?: number;
  work_time?: number;
  rating: number;
  created_at: Date;
  deleted_at: Date | null;
  user_id: User["id"];
};

export type User = {
  email: string;
  id: string;
};

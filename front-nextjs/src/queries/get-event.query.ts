import { EventModel } from '@/models/event.model';

export async function getEvent(eventId: string): Promise<EventModel> {
  const response = await fetch(
    `${process.env.GOLANG_API_URL}/events/${eventId}`,
    {
      headers: {
        apikey: process.env.GOLANG_API_TOKEN as string,
      },
      // cache: 'no-store',
      next: {
        tags: [`events/${eventId}`],
      },
    }
  );
  return response.json();
}

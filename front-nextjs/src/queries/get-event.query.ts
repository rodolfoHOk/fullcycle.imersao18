import { EventModel } from '@/models/event.model';

export async function getEvent(eventId: string): Promise<EventModel> {
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    cache: 'no-store',
  });
  return response.json();
}

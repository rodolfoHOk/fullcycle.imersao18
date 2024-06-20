import { EventModel } from '@/models/event.model';

export async function getEvents(): Promise<{ events: EventModel[] }> {
  const response = await fetch('http://localhost:8080/events', {
    cache: 'no-store',
    // next: {
    //   revalidate: 10, // 10 seconds
    // },
  });
  return response.json();
}

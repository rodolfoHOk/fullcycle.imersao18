import { EventModel } from '@/models/event.model';

export async function getEvents(): Promise<{ events: EventModel[] }> {
  const response = await fetch('http://localhost:8080/events', {
    // cache: 'no-store',
    next: {
      revalidate: 60 * 5, // 5 minutes
      tags: ['events'],
    },
  });
  return response.json();
}

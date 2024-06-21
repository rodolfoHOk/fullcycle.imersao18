import { EventModel } from '@/models/event.model';

export async function getEvents(): Promise<{ events: EventModel[] }> {
  const response = await fetch(`${process.env.GOLANG_API_URL}/events`, {
    headers: {
      apikey: process.env.GOLANG_API_TOKEN as string,
    },
    // cache: 'no-store',
    next: {
      revalidate: 60 * 5, // 5 minutes
      tags: ['events'],
    },
  });
  return response.json();
}

import { EventModel } from '@/models/event.model';
import { SpotModel } from '@/models/spot.model';

export async function getSpots(eventId: string): Promise<{
  event: EventModel;
  spots: SpotModel[];
}> {
  const response = await fetch(
    `${process.env.GOLANG_API_URL}/events/${eventId}/spots`,
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

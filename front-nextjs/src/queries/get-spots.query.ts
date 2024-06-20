import { EventModel } from '@/models/event.model';
import { SpotModel } from '@/models/spot.model';

export async function getSpots(eventId: string): Promise<{
  event: EventModel;
  spots: SpotModel[];
}> {
  const response = await fetch(
    `http://localhost:8080/events/${eventId}/spots`,
    {
      // cache: 'no-store',
      next: {
        tags: [`events/${eventId}`],
      },
    }
  );
  return response.json();
}

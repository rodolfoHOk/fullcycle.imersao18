'use server';

import { cookies } from 'next/headers';

export async function selectSpotAction(eventId: string, spotName: string) {
  const cookieStore = cookies();
  const spots = JSON.parse(cookieStore.get('spots')?.value || '[]');
  spots.push(spotName);
  const uniqueSpots = spots.filter(
    (spot: string, index: number) => spots.indexOf(spot) === index
  );
  cookieStore.set('spots', JSON.stringify(uniqueSpots));
  cookieStore.set('eventId', eventId);
}

export async function unselectSpotAction(spotName: string) {
  const cookieStore = cookies();
  const spots = JSON.parse(cookieStore.get('spots')?.value || '[]');
  const newSpots = spots.filter((spot: string) => spot !== spotName);
  cookieStore.set('spots', JSON.stringify(newSpots));
}

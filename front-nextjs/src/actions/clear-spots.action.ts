'use server';

import { cookies } from 'next/headers';

export async function clearSpotsAction() {
  const cookieStore = cookies();
  cookieStore.set('spots', '[]');
  cookieStore.set('eventId', '');
}

'use server';

import { cookies } from 'next/headers';

export async function selectTicketTypeAction(ticketKind: 'full' | 'half') {
  const cookieStore = cookies();
  cookieStore.set('ticketKind', ticketKind);
}

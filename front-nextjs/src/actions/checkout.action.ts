'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { clearSpotsAction } from './clear-spots.action';

export async function checkoutAction(
  prevState: any,
  {
    cardHash,
    email,
  }: {
    cardHash: string;
    email: string;
  }
) {
  const cookieStore = cookies();
  const eventId = cookieStore.get('eventId')?.value;
  const spots = JSON.parse(cookieStore.get('spots')?.value || '[]');
  const ticketKind = cookieStore.get('ticketKind')?.value || 'full';

  const response = await fetch(`${process.env.GOLANG_API_URL}/checkout`, {
    method: 'POST',
    body: JSON.stringify({
      event_id: eventId,
      card_hash: cardHash,
      ticket_kind: ticketKind,
      spots,
      email,
    }),
    headers: {
      'Content-Type': 'application/json',
      apikey: process.env.GOLANG_API_TOKEN as string,
    },
  });

  if (!response.ok) {
    return { error: 'Erro ao realizar a compra' };
  }

  clearSpotsAction();
  revalidateTag(`events/${eventId}`);
  redirect(`/checkout/${eventId}/success`);
}

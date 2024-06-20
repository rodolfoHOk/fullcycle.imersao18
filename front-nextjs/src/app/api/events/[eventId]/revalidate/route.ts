import { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';

export function POST(
  request: NextRequest,
  { params }: { params: { eventId: string } }
) {
  revalidateTag('events');
  revalidateTag(`events/${params.eventId}`);

  return new Response(null, { status: 204 });
}

'use client';

import { selectTicketTypeAction } from '@/actions/select-ticket-type-action';
import { brlCurrencyFormat } from '@/utils/brl-currenty-format';

export type TicketKindSelectProps = {
  defaultValue: 'full' | 'half';
  price: number;
};

export function TicketKindSelect({
  price,
  defaultValue,
}: TicketKindSelectProps) {
  const formattedFullPrice = brlCurrencyFormat(price);
  const formattedHalfPrice = brlCurrencyFormat(price / 2);

  return (
    <>
      <label htmlFor="ticket-type">Escolha o tipo de ingresso</label>

      <select
        name="ticket-type"
        id="ticket-type"
        className="mt-2 rounded-lg bg-input px-4 py-[14px]"
        defaultValue={defaultValue}
        onChange={async (e) => {
          await selectTicketTypeAction(e.target.value as any);
        }}
      >
        <option value="full">Inteira - {formattedFullPrice}</option>
        <option value="half">Meia-entrada - {formattedHalfPrice}</option>
      </select>
    </>
  );
}

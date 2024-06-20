'use client';

import { PropsWithChildren } from 'react';
import { getCardHashService } from '@/services/get-card-hash.service';
import { checkoutAction } from '@/actions/checkout.action';

export type CheckoutFormProps = {
  className?: string;
};

export function CheckoutForm({
  children,
  className,
}: PropsWithChildren<CheckoutFormProps>) {
  async function handleCheckout(formData: FormData) {
    const card_hash = await getCardHashService({
      cardName: formData.get('card_name') as string,
      cardNumber: formData.get('cc') as string,
      expireDate: formData.get('expire_date') as string,
      cvv: formData.get('cvv') as string,
    });
    await checkoutAction({
      cardHash: card_hash,
      email: formData.get('email') as string,
    });
  }

  return (
    <form action={handleCheckout} className={className}>
      <input type="hidden" name="card_hash" />
      {children}
    </form>
  );
}

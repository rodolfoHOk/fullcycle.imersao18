'use client';

import { PropsWithChildren } from 'react';
import { getCardHashService } from '@/services/get-card-hash.service';
import { checkoutAction } from '@/actions/checkout.action';
import { useFormState } from 'react-dom';
import { ErrorMessage } from '@/components/ErrorMessage';

export type CheckoutFormProps = {
  className?: string;
};

export function CheckoutForm({
  children,
  className,
}: PropsWithChildren<CheckoutFormProps>) {
  const [state, formAction] = useFormState(checkoutAction, {
    error: null as string | null,
  });

  async function handleCheckout(formData: FormData) {
    const card_hash = await getCardHashService({
      cardName: formData.get('card_name') as string,
      cardNumber: formData.get('cc') as string,
      expireDate: formData.get('expire_date') as string,
      cvv: formData.get('cvv') as string,
    });
    formAction({
      cardHash: card_hash,
      email: formData.get('email') as string,
    });
  }

  return (
    <form action={handleCheckout} className={className}>
      {state?.error && <ErrorMessage error={state.error} />}
      <input type="hidden" name="card_hash" />
      {children}
    </form>
  );
}

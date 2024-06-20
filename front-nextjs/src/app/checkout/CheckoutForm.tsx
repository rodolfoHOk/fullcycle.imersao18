import { PropsWithChildren } from 'react';

export type CheckoutFormProps = {
  className?: string;
};

export function CheckoutForm(props: PropsWithChildren<CheckoutFormProps>) {
  return (
    <form className={props.className}>
      <input type="hidden" name="card_hash" />
      {props.children}
    </form>
  );
}

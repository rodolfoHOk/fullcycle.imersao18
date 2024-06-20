type CardHashRequest = {
  cardName: string;
  cardNumber: string;
  expireDate: string;
  cvv: string;
};

export async function getCardHashService({
  cardName,
  cardNumber,
  expireDate,
  cvv,
}: CardHashRequest) {
  return Math.random().toString(36).substring(7);
}

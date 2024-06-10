export function formatCurrency(value) {
  return value?.toLocaleString("en-UG", {
    style: "currency",
    currency: "UGX",
    currencyDisplay: "code",
    maximumFractionalDigits: 0,
  });
}

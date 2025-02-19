function togglePaymentFields() {
  let cardDetails = document.getElementById("card-details");
  let ewalletDetails = document.getElementById("ewallet-details");
  let paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

  // Hide all payment fields first
  cardDetails.classList.add("hidden");
  ewalletDetails.classList.add("hidden");

  // Show the selected payment fields
  if (paymentMethod === "card") {
      cardDetails.classList.remove("hidden");
  } else if (paymentMethod === "e-wallet") {
      ewalletDetails.classList.remove("hidden");
  }
}
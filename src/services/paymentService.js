export const calculateTax = (amount, state) => {
  // Implement region-specific tax calculations
  const taxRates = {
    'Lagos': 0.075,
    'Abuja': 0.05,
    'default': 0.05
  };
  return amount * (taxRates[state] || taxRates.default);
};

export const paymentHandlers = {
  paystack: async (payload) => {
    /* Paystack implementation */
  },
  stripe: async (payload) => {
    /* Stripe implementation */
  }
};
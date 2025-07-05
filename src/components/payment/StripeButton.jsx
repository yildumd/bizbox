export default function StripeButton({ idea }) {
  const handlePayment = () => {
    // Stripe integration logic
    console.log(`Processing ${idea.title} payment via Stripe`);
  };

  return (
    <button 
      onClick={handlePayment}
      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
    >
      Pay ${idea.usdPrice} via Stripe
    </button>
  );
}
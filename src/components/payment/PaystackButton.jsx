export default function PaystackButton({ idea }) {
  const handlePayment = () => {
    // Paystack integration logic
    console.log(`Processing ${idea.title} payment via Paystack`);
  };

  return (
    <button 
      onClick={handlePayment}
      className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
    >
      Pay ₦{idea.price} via Paystack
    </button>
  );
}
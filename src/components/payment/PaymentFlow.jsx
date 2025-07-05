import { useState } from 'react';
import StripeButton from './StripeButton';
import PaystackButton from './PaystackButton';

export default function PaymentFlow({ idea }) {
  const [paymentMethod, setPaymentMethod] = useState('paystack');
  
  return (
    <div className="payment-flow">
      <select 
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="paystack">Paystack</option>
        <option value="stripe">Stripe</option>
      </select>

      {paymentMethod === 'paystack' ? (
        <PaystackButton idea={idea} />
      ) : (
        <StripeButton idea={idea} />
      )}
    </div>
  );
}
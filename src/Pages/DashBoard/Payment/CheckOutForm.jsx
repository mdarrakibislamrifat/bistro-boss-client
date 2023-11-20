import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError]=useState('');
  const [clientSecret,setClientSecret]=useState('');
  const [transactionId,setTransactionId]=useState('')
  const axiosSecure=useAxiosSecure();
  const [cart,refetch]=useCart();
  const totalPrice=cart.reduce((total,item)=>total+item.price,0)
  const {user}=useAuth();

useEffect(()=>{
   if(totalPrice>0){axiosSecure.post('/create-payment-intent',{price:totalPrice})
   .then(res=>{
    
    setClientSecret(res.data.clientSecret)
   })}
},[axiosSecure,totalPrice])



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
     // Use your card Element with other Stripe.js APIs
     const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('error', error);
        setError(error.message)
      } else {
        console.log('PaymentMethod', paymentMethod);
        setError('')
      }

      // confirm payment
      const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,
        {
          payment_method:{
            card:card,
            billing_details:{
              email:user?.email || 'anonymous',
              name:user.displayName ||'anonymous' 
            }
          }
        })
        if(confirmError){
          console.log('Confirm error',)
        }else{
          console.log('Payment intent',paymentIntent)
          if(paymentIntent.status=== 'succeeded'){
            console.log('Transaction id ',paymentIntent.id)
            setTransactionId(paymentIntent.id)
            // now save the payment in the database
            const payment={
              email: user.email,
              price:totalPrice,
              transactionId:paymentIntent.id,
              date: new Date(),
              cartIds: cart.map(item=>item._id),
              menuItemIds:cart.map(item=>item.menuId),
              status: 'pending'
            }
         const res=await axiosSecure.post('/payments',payment)
         
         refetch()
         if(res.data?.paymentResult?.insertedId)
         Swal.fire({
          title: "Thank you for payment",
          icon: "success"
        });
          }
        }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && <p className="text-green-500">Your transaction id:{transactionId}</p>}
    </form>
  );
};

export default CheckOutForm;

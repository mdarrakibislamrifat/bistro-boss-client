
import SectionTitle from '../../../Components/SectionTitle/Sectiontitle';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading='Payment' subHeading='Please pay to eat'></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
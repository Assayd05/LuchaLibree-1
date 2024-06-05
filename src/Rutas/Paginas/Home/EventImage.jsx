import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './EventImage.css';

const stripePromise = loadStripe('pk_test_51OwWETP0nhGqtxkR57T7dDnLPsm5wSwKeneyPEAMd2tbzjRzkeHxKsAgX8z0N96tjYMddFnDmXgN6otiL1VVaAQJ00VqSHaDU5');

const EventImage = ({ imageURL }) => {
  const handleClick = async () => {
    try {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          { price: 'price_1PO9kqP0nhGqtxkRAARMn7LA', quantity: 1 }
        ],
        mode: 'payment',
        successUrl: 'https://tupagina.com/exito',
        cancelUrl: 'https://tupagina.com/cancelado',
      });

      if (error) {
        console.error('Error al redireccionar a la página de pago:', error);
      }
    } catch (error) {
      console.error('Error al cargar Stripe:', error);
    }
  };

  return (
    <div className="event-image-container">
      <img className="event-image" src={imageURL} alt="Event" />
      <div className="button-container">
        <button className="reserve-button" onClick={handleClick}>
          Reservar Boletos
        </button>
      </div>
    </div>
  );
};

export default EventImage;

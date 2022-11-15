import './App.css';
import React, { useEffect } from "react";
import useRazorpay from "react-razorpay";

function App() {
  const user = {
    mobile: 9045973853,
    email: 'ayush.gupta@hestabit.in',
    name: "Ayush Gupta",
    address: "sector 7, noida"
  }

  const shop = {
    name: "ABCD Shop",
    product_description: "Test Description"
  }
  const amount = 100;

  const options = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount: `${amount}`,
    name: shop?.name,
    description: shop?.product_description,
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function (response) {
      console.log(response)
      alert(response.razorpay_payment_id);
    },
    prefill: {
      name: user.name,
      contact: user.mobile,
      email: user.email,
    },
    notes: {
      address: user.address
    },
    theme: {
      color: "#F37254",
      hide_topbar: false
    }
  };

  const openPayModal = options => {
    let rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => openPayModal(options)}>Pay {amount / 100}₹</button>
      </header>
    </div>
  );
}

export default App;

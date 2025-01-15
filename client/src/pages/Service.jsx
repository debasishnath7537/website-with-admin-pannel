import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
// import axios from "axios";

// export const Service = () => {
//   const [services, setServices] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/data/service"
//         );
//         setServices(response.data.msg); // Assuming `msg` contains the array of services
//       } catch (err) {
//         setError(err.message);
//         console.error("Error fetching services:", err);
//       }
//     };

//     fetchServices();
//   }, []);
export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>
      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => {
          const { price, description, provider, service } = curElem;
          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src="/images/design.png"
                  alt="our service info"
                  width="200"
                />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

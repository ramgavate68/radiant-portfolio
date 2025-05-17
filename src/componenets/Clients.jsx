import React from "react";
import "./clients.css";

const clients = [
  { name: "Varun", logo: "/logos/Varun.png" },
  { name: "SMS", logo: "/logos/SMS.jpg" },
  { name: "Rajiv Plastics", logo: "/logos/RajivPlastics.png" },
  { name: "Nouryon", logo: "/logos/Nouryon.png" },
  { name: "Nilsan Nishotech", logo: "/logos/NilsanNishotech.png" },
  { name: "Nic", logo: "/logos/Nic.jpg" },
  { name: "Martin", logo: "/logos/Martin.png" },
  { name: "JFE", logo: "/logos/JFE.png" },
];

const Client = () => {
  return (
    <div id="clients" className="client">
      <h2 className="client-heading">Our Estimated Clients</h2>
      <div className="marquee-box">
        <div className="marquee-track">
          {clients.concat(clients).map((client, index) => (
            <div className="client-logo" key={index}>
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;

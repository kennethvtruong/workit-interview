import "./dashboardStyles.css";
import { useState } from "react";
import { clinicData } from "./clinicData.js";
import LocationCard from "./LocationCard.jsx";

function ClinicDashboard() {
  const [cardData] = useState(clinicData);

  return (
    <div className="Clinic-Dashboard">
      <div className="dashboard-header">
        <h1>Clinic Dashboard</h1>
      </div>
      <div className="dashboard-content">
        {cardData.map((card, idx) => {
          return (
            <div className="Location-Card" key={idx}>
              <LocationCard card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ClinicDashboard;

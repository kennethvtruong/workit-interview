const LocationCard = ({ card }) => {
  return (
    <div className="card-container">
      <div className="title-container">
        <p className="row title">{`Workit @ ${card.name}`}</p>
        <p>{`${card.members} Members | ${card.providers} Providers`}</p>
      </div>
      <div className="options-container">
        <div className="options">
          <div className="icon-container">
            <a href="#">
              <img
                className="icons"
                src="https://storage.googleapis.com/workit-client-assets/icons_lib/right-round-dark-blue.svg"
                alt=""
              ></img>
            </a>
          </div>
          <a href="#">Details</a>
        </div>
        <div className="options">
          <div className="icon-container">
            <a href="#">
              <img
                className="icons"
                src="https://storage.googleapis.com/workit-client-assets/icons_lib/settings-dark-blue.svg"
                alt=""
              ></img>
            </a>
          </div>
          <a href="#">Manage</a>
        </div>
        <div className="options">
          <div className="icon-container">
            <a href="#">
              <img
                className="icon"
                src="https://storage.googleapis.com/workit-client-assets/icons_lib/calendar-dark-blue.svg"
                alt=""
              ></img>
            </a>
          </div>
          <a href="#">Availabilities</a>
        </div>
        <div className="options">
          <div className="icon-container">
            <a href="#">
              <img
                className="icons"
                src="https://storage.googleapis.com/workit-client-assets/icons_lib/calendar-booked-dark-blue.svg"
                alt=""
              ></img>
            </a>
          </div>
          <a href="#">Calendar</a>
        </div>
      </div>
      <div
        className="color-container"
        style={{ background: `${card.color}` }}
      ></div>
    </div>
  );
};
export default LocationCard;

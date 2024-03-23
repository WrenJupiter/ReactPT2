const Tweet = ({ username, name, date, message }) => {
  return (
    <div className="tweet">
      <div>Username: {username}</div>
      <div>
        Name: <span className="name">{name}</span>
      </div>
      <div className="date">Date: {date}</div>
      <div className="message">Message: {message}</div>
    </div>
  );
};

const Tweet = ({ username, name, date, message }) => (
  <div>
    <h3>{username}</h3>
    <p>{name}</p>
    <p>{date}</p>
    <p>{message}</p>
  </div>
);

const Person = ({ name, age, hobbies }) => (
  <div>
    <p>Learn some information about this person</p>
    <ul>
      <li>Name: {name.length > 8 ? name.slice(0, 6) : name}</li>
      <li>Age: {age}</li>
    </ul>
    <ul>
      Hobbies:
      {hobbies.map((hobby) => (
        <li>{hobby}</li>
      ))}
    </ul>
    <h3>{age >= 18 ? "Please go vote!" : "You must be 18"}</h3>
  </div>
);

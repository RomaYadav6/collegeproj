import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);

  const addCard = () => {
    if (name.trim()) {
      setCards([...cards, name]);
      setName("");
    }
  };

  const deleteCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>TO DO LISTS</h1>
      <div className="input-container">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter category name"
        />
        <button onClick={addCard}>Add</button>
      </div>
      <div className="cards-container">
        {cards.map((cardName, index) => (
          <Card
            key={index}
            name={cardName}
            onDelete={() => deleteCard(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import "./App.css";

const themes = {
  Love: [
    { quote: "Love is blind.", analysis: "This means that love often blinds people to faults." },
    { quote: "Love conquers all.", analysis: "Love can overcome obstacles." }
  ],
  Friendship: [
    { quote: "A friend in need is a friend indeed.", analysis: "True friends help in times of need." }
  ]
};

function App() {
  const [theme, setTheme] = useState("Love");
  return (
    <div className="App">
      <h1>Flashcards</h1>
      <button onClick={() => setTheme(theme === "Love" ? "Friendship" : "Love")}>
        Switch to {theme === "Love" ? "Friendship" : "Love"} Quotes
      </button>
      <div>
        {themes[theme].map((card, idx) => (
          <Flashcard key={idx} quote={card.quote} analysis={card.analysis} />
        ))}
      </div>
    </div>
  );
}

export default App;

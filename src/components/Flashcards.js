import React, { useState } from "react";

function Flashcards() {
  const [flashcards, setFlashcards] = useState([
    { id: 1, quote: "To be or not to be.", analysis: "A soliloquy from Hamlet.", theme: "Existentialism" },
    { id: 2, quote: "All the world's a stage.", analysis: "Metaphor for life from As You Like It.", theme: "Life and Death" },
  ]);

  const [newFlashcard, setNewFlashcard] = useState({ quote: "", analysis: "", theme: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFlashcard((prev) => ({ ...prev, [name]: value }));
  };

  const addFlashcard = () => {
    if (newFlashcard.quote && newFlashcard.analysis && newFlashcard.theme) {
      setFlashcards([
        ...flashcards,
        { id: Date.now(), ...newFlashcard },
      ]);
      setNewFlashcard({ quote: "", analysis: "", theme: "" });
    }
  };

  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter((card) => card.id !== id));
  };

  return (
    <div className="flashcards-container">
      <h2>Flashcards</h2>

      {/* Flashcard List */}
      <div className="flashcard-list">
        {flashcards.map((card) => (
          <div key={card.id} className="flashcard">
            <p><strong>Quote:</strong> {card.quote}</p>
            <p><strong>Analysis:</strong> {card.analysis}</p>
            <p><strong>Theme:</strong> {card.theme}</p>
            <button onClick={() => deleteFlashcard(card.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Add Flashcard */}
      <div className="add-flashcard">
        <h3>Add New Flashcard</h3>
        <input
          type="text"
          name="quote"
          placeholder="Enter quote"
          value={newFlashcard.quote}
          onChange={handleChange}
        />
        <input
          type="text"
          name="analysis"
          placeholder="Enter analysis"
          value={newFlashcard.analysis}
          onChange={handleChange}
        />
        <input
          type="text"
          name="theme"
          placeholder="Enter theme"
          value={newFlashcard.theme}
          onChange={handleChange}
        />
        <button onClick={addFlashcard}>Add Flashcard</button>
      </div>
    </div>
  );
}

export default Flashcards;

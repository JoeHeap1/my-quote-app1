import React, { useState } from "react";

function TestMode() {
  const [flashcards, setFlashcards] = useState([
    { id: 1, quote: "To be or not to be.", theme: "Existentialism" },
    { id: 2, quote: "All the world's a stage.", theme: "Life and Death" },
    { id: 3, quote: "Brevity is the soul of wit.", theme: "Wisdom" },
  ]);

  const [selectedTheme, setSelectedTheme] = useState("");
  const [filteredFlashcards, setFilteredFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleThemeSelection = (e) => {
    const theme = e.target.value;
    setSelectedTheme(theme);
    setFilteredFlashcards(flashcards.filter((card) => card.theme === theme));
    setCurrentCardIndex(0);
    setShowResults(false);
    setScore(0);
  };

  const handleAnswerSubmit = () => {
    const currentCard = filteredFlashcards[currentCardIndex];
    if (userAnswer.trim().toLowerCase() === currentCard.quote.trim().toLowerCase()) {
      setScore(score + 1);
    }
    if (currentCardIndex + 1 < filteredFlashcards.length) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setShowResults(true);
    }
    setUserAnswer("");
  };

  return (
    <div className="test-mode-container">
      <h2>Test Mode</h2>

      {/* Theme Selection */}
      <div className="theme-selection">
        <h3>Select a Theme</h3>
        <select value={selectedTheme} onChange={handleThemeSelection}>
          <option value="">-- Choose a Theme --</option>
          <option value="Existentialism">Existentialism</option>
          <option value="Life and Death">Life and Death</option>
          <option value="Wisdom">Wisdom</option>
        </select>
      </div>

      {/* Test Display */}
      {selectedTheme && !showResults && filteredFlashcards.length > 0 && (
        <div className="test-card">
          <p>
            <strong>Theme:</strong> {filteredFlashcards[currentCardIndex].theme}
          </p>
          <p>
            Write the quote associated with this theme:
          </p>
          <input
            type="text"
            placeholder="Your answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button onClick={handleAnswerSubmit}>Submit Answer</button>
        </div>
      )}

      {/* Test Results */}
      {showResults && (
        <div className="test-results">
          <h3>Test Complete</h3>
          <p>
            You got {score} out of {filteredFlashcards.length} correct!
          </p>
        </div>
      )}

      {/* No Flashcards */}
      {selectedTheme && filteredFlashcards.length === 0 && !showResults && (
        <p>No flashcards found for the selected theme.</p>
      )}
    </div>
  );
}

export default TestMode;

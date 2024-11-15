import React, { useState } from "react";

function Flashcard({ quote, analysis }) {
  const [showAnalysis, setShowAnalysis] = useState(false);
  return (
    <div className="flashcard">
      <p>{quote}</p>
      {showAnalysis && <p>{analysis}</p>}
      <button onClick={() => setShowAnalysis(!showAnalysis)}>
        {showAnalysis ? "Hide Analysis" : "Show Analysis"}
      </button>
    </div>
  );
}

export default Flashcard;

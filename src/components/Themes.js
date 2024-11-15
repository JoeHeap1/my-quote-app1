import React, { useState } from "react";

function Themes() {
  const [themes, setThemes] = useState(["Existentialism", "Life and Death", "Wisdom"]);
  const [newTheme, setNewTheme] = useState("");

  const addTheme = () => {
    if (newTheme.trim() && !themes.includes(newTheme)) {
      setThemes([...themes, newTheme]);
      setNewTheme("");
    }
  };

  const deleteTheme = (theme) => {
    setThemes(themes.filter((t) => t !== theme));
  };

  return (
    <div className="themes-container">
      <h2>Manage Themes</h2>
      
      {/* Add Theme */}
      <div className="add-theme">
        <h3>Add a New Theme</h3>
        <input
          type="text"
          placeholder="Enter theme name"
          value={newTheme}
          onChange={(e) => setNewTheme(e.target.value)}
        />
        <button onClick={addTheme}>Add Theme</button>
      </div>

      {/* List Themes */}
      <div className="theme-list">
        <h3>Existing Themes</h3>
        {themes.length > 0 ? (
          themes.map((theme, index) => (
            <div key={index} className="theme-item">
              <span>{theme}</span>
              <button onClick={() => deleteTheme(theme)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No themes available. Add a theme to get started!</p>
        )}
      </div>
    </div>
  );
}

export default Themes;

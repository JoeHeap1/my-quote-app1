import React from "react";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome to My Quote Learning App</h2>
      <div className="dashboard-progress">
        <h3>Your Progress</h3>
        <div className="progress-item">
          <p>Flashcards Ready for Review:</p>
          <span>10</span>
        </div>
        <div className="progress-item">
          <p>Total Flashcards Learned:</p>
          <span>25</span>
        </div>
        <div className="progress-item">
          <p>Themes Mastered:</p>
          <span>3</span>
        </div>
      </div>
      <div className="dashboard-links">
        <h3>Quick Actions</h3>
        <ul>
          <li><a href="/flashcards">View Flashcards</a></li>
          <li><a href="/test-mode">Start a Test</a></li>
          <li><a href="/flashcards">Add New Flashcards</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;

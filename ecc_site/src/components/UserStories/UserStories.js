import React from 'react';
import './UserStories.css'; // Import the CSS file
import userStoriesData from './UserStoriesData.json'; // Import the user stories data

// Create a UserStories component
const UserStoriesComponent = () => {
  return (
    <div className="content">
      <h1>The truth about how Alcohol harms the people around you</h1>
      <div className="stories-container">
        {userStoriesData.map((userStory, index) => (
          <div className="user-story" key={index}>
            <h2>{userStory.userName}</h2>
            <p>{userStory.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStoriesComponent;

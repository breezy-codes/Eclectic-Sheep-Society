import React from "react";
import "./UserStories.css"; // Import the CSS file
import userStoriesData from "./UserStoriesData.json"; // Import the user stories data

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
      <div className="stories-container">
        <div className="user-story">
          <h2>We want your stories!</h2>
          <p>
            If you have a story about how alcohol has affected you or someone
            you know, please share it with us. We will publish it here to help
            others and show the real truth about the problem with alcohol in
            Australia.
          </p>
          <a href="#add-your-story" className="add-story-button">
            Add your story here
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserStoriesComponent;

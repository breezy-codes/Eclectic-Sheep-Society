import React from "react";
import "./UserStories.css";
import userStoriesData from "./UserStoriesData.json";

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
            <br></br>
            This feature we are working to implement as security and data
            privacy is our top priority, we want to ensure that your stories are
            safe and secure. We hope to have this functioning soon, so please
            check back in the future.
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

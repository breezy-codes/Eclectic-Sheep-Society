import React from 'react';


const Home = () => {
  return (
    <div className="home-content">
      <h1>Eclectic Sheep Society Presents</h1>
      <p>
      Australia is facing a significant issue with alcohol consumption, where excessive drinking has become normalised within the culture.

Solution: Our proposed interactive platform will serve as an intervention tool, aimed at individuals who may be unaware of their need for assistance. By visualising government data regarding alcohol consumption when prompted by the user, the platform will track the user's drinking habits. This could function as a catalyst for the user to seek professional help if needed.

DataSets: Using data from Data.gov.au, we will draw from datasets that link alcohol and drug use to various triggers, as well as statistics related to hospital admissions due to alcohol overuse, and deaths attributable to alcoholism. Additional information will be sourced from the ABS, including data on Driving Under the Influence convictions, automotive fatalities related to drunk driving, and incidents of public disorder or violence associated with alcohol consumption
      </p>
      <div className="photo-grid">
        <img src="photo1.jpg" alt="Photo 1" />
        <img src="photo2.jpg" alt="Photo 2" />
        <img src="photo3.jpg" alt="Photo 3" />
      </div>
      <p>
        In the landscape of mental health in Australia, a stark reality emerges:
        it is predomi
      </p>
      <div className="large-image">
        <img src="large-image.jpg" alt="Large Image" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ipsum nec
        quam varius suscipit a et elit.
      </p>
      <div className="another-image">
        <img src="another-image.jpg" alt="Another Image" />
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import './Stats.css';
import StatsData from './Stats.json';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GraphSet = ({ graphSet }) => {
  const ageGroups = graphSet.datasets.map(dataset => dataset.ageGroupLabel);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(ageGroups[0]);

  const selectedDataset = graphSet.datasets.find(dataset =>
    dataset.ageGroupLabel === selectedAgeGroup
  );

  const handleChangeAgeGroup = (event) => {
    setSelectedAgeGroup(event.target.value);
  };

  if (!selectedDataset) {
    return null; // Return null or some placeholder if the selectedDataset is not found
  }

  return (
    <div className="graph-container">
      <h2>{graphSet.label}</h2>
      <div className="dropdown">
        <label>Select Age Group: </label>
        <select value={selectedAgeGroup} onChange={handleChangeAgeGroup}>
          {ageGroups.map((ageGroup) => (
            <option key={ageGroup} value={ageGroup}>
              {ageGroup}
            </option>
          ))}
        </select>
      </div>
      <div className="line-chart-container">
        <LineChart width={900} height={400} data={selectedDataset.data}>
          <XAxis dataKey="label" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          {Object.keys(selectedDataset.data[0]).map((dataKey, index) => {
            if (dataKey !== 'label') {
              return (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={dataKey}
                  stroke={`rgba(14, 165, 197, 0.8)`}
                  activeDot={{ r: 8 }}
                />
              );
            }
            return null;
          })}
        </LineChart>
      </div>
    </div>
  );
};

const StatsComponent = () => {
  const graphSets = Object.entries(StatsData);

  return (
    <div className="content">
      <h1>The current Government Statistics</h1>
      <p>Taken from abs.gov.au and data.gov.au</p>
      {graphSets.map(([graphSetName, graphSetData]) => (
        <GraphSet
          key={graphSetName}
          graphSet={{ label: graphSetName, ...graphSetData }} // Pass label as well
        />
      ))}
    </div>
  );
};

export default StatsComponent;

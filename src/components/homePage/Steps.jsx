import React from 'react';


const steps = [
  {
    id: 1,
    title: 'Signup',
    description: 'Get YourDesiCart Locker Address To Store Purchases In India Temporarily.'
  },
  {
    id: 2,
    title: 'Shop',
    description: 'Shop From Any Store In India And Ship To Your Locker Address.'
  },
  {
    id: 3,
    title: 'Relax',
    description: 'We Will Receive, Inspect, Consolidate And Ship To Your Doorstep Worldwide.'
  },
  {
    id: 4,
    title: 'Receive',
    description: 'Receive Your Package In 3-7 Days Sitting Abroad.'
  }
];

const StepsComponent = () => {
  return (
    <div className="stepsContainer">
      {steps.map((step) => (
        <div key={step.id} className="ydc-step">
          <div className="stepNumber ">{step.id}</div>
          <h3 className="stepTitle ">{step.title}</h3>
          <p className="stepDesc ">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StepsComponent;

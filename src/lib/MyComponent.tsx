import React from 'react';

type MyComponentProps = {
  headline: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ headline }) => {
  return <h1>{headline}</h1>;
};

export default MyComponent;

import React from 'react';

type ComponentProps = {
  headline: string;
};

const Component: React.FC<ComponentProps> = ({ headline }) => {
  return <h1>{headline}</h1>;
};

export default Component;

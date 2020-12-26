type ComponentProps = {
  headline: string;
};

const Component: React.FC<ComponentProps> = ({ headline }) => (
  <h1>{headline}</h1>
);

export default Component;

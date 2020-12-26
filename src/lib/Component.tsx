import { ReactComponent as Heart } from './assets/Heart.svg';

type ComponentProps = {
  headline: string;
};

const Component: React.FC<ComponentProps> = ({ headline }) => (
  <>
    <link
      rel="stylesheet"
      href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    />
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-600">
        {headline}
      </h1>
      <Heart className="w-8 h-8 text-red-600 animate-pulse" />
    </div>
  </>
);

export default Component;

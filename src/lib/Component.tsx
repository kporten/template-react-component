import { StrictMode } from 'react';

import { ReactComponent as Heart } from './assets/Heart.svg';
import { version } from '../../package.json';

type ComponentProps = {
  headline: string;
};

const Component: React.FC<ComponentProps> = ({ headline }) => (
  <StrictMode>
    <link
      rel="stylesheet"
      href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    />
    <div className="flex flex-col items-center p-8">
      <h1 className="mb-2 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-600">
        {headline}
      </h1>
      <Heart className="w-8 h-8 text-red-600 animate-pulse" />
      <div className="mt-4 text-gray-400">v{version}</div>
    </div>
  </StrictMode>
);

export default Component;

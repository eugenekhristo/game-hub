import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as Chakra } from '@/components/ui/provider';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Chakra>
      <App />
    </Chakra>
  </StrictMode>
);

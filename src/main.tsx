import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const queryCLient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryCLient}>
    <App />
    <ReactQueryDevtools/>
  </QueryClientProvider>
);

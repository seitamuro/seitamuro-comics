import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ClientApp } from '@comics/app/src/index';

const main = () => {
  const rootElement = document.getElementById('root');
  if (rootElement === null) throw new Error('rootElement was not found');
  ReactDOM.hydrateRoot(
    rootElement,
    <BrowserRouter>
      <ClientApp />
    </BrowserRouter>,
  );
};

main();

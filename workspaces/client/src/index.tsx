import ReactDOM from 'react-dom/client';

import { ClientApp } from '@comics/app/src/index';
import { BrowserRouter } from 'react-router-dom';

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

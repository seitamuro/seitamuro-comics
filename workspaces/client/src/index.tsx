import { hydrateRoot } from 'react-dom/client';

import { App } from '@comics/app/src/index';

const rootElement = document.getElementById('root');

if (rootElement === null) throw new Error('rootElement was not found');

hydrateRoot(rootElement, <App />);

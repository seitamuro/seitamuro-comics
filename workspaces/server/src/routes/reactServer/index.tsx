import { Hono } from 'hono';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

import { App } from '@comics/app/src';

const app = new Hono();

const createHtml = (component: string) => `
  <html>
    <head>
      <script src="/client.mjs" async defer></script>
    </head>
    <body>
      <div id="root">${component}</div>
    </body>
  </html>
`;

app.get('/', (c) => {
  console.log('catch');
  const element = createElement(App);
  console.log('created element');
  console.log(element);
  const comp = renderToString(createElement(App));
  console.log('rendered');
  const view = createHtml(comp);
  console.log(view);
  return c.html(view);
});

export { app as reactServer };

import { Hono } from 'hono';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { ClientApp } from '@comics/app/src';

const app = new Hono();

const createHtml = (component: string) => `
  <html>
    <head>
      <script type="module" src="/client.mjs"></script>
    </head>
    <body>
      <div id="root">${component}</div>
    </body>
  </html>
`;

app.get('*', (c) => {
  const comp = renderToString(
    <StaticRouter location={c.req.path}>
      <ClientApp />
    </StaticRouter>,
  );
  const view = createHtml(comp);
  return c.html(view);
});

export { app as reactServer };

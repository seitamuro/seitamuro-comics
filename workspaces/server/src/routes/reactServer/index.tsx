import { Hono } from 'hono';
import fs from 'node:fs';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { ClientApp } from '@comics/app/src';

const app = new Hono();

const createHtml = async (component: string) => {
  const WORKSPACE_ROOT_DIR = process.cwd();
  const INDEX_HTML_PATH = path.resolve(WORKSPACE_ROOT_DIR, 'src/index.html');
  console.log(INDEX_HTML_PATH);
  let html = fs.readFileSync(INDEX_HTML_PATH, 'utf8');
  html = html.replaceAll('<!-- app -->', `<div id="root">${component}</div>`);
  return html;
};

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

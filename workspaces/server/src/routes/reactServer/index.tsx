import { Hono } from 'hono';
import fs from 'node:fs';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet } from 'styled-components';

import { ClientApp } from '@comics/app/src';

const app = new Hono();

const createHtml = async (component: string, styleTags: string) => {
  const WORKSPACE_ROOT_DIR = process.cwd();
  const INDEX_HTML_PATH = path.resolve(WORKSPACE_ROOT_DIR, 'src/index.html');
  console.log(INDEX_HTML_PATH);
  let html = fs.readFileSync(INDEX_HTML_PATH, 'utf8');
  html = html
    .replaceAll('<!-- app -->', `<div id="root">${component}</div>`)
    .replaceAll('<style id="tag"></style>', styleTags);
  return html;
};

app.get('*', (c) => {
  const sheet = new ServerStyleSheet();

  const comp = renderToString(
    sheet.collectStyles(
      <StaticRouter location={c.req.path}>
        <ClientApp />
      </StaticRouter>,
    ),
  );

  const styleTags = sheet.getStyleTags();
  const view = createHtml(comp, styleTags);
  return c.html(view);
});

export { app as reactServer };

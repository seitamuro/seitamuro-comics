import { Hono } from 'hono';
import path from 'path';

import { serveStatic } from '@hono/node-server/serve-static';
import { CLIENT_STATIC_PATH } from '../../constants/paths';

const app = new Hono();

app.use(
  '*',
  serveStatic({
    root: path.relative(process.cwd(), CLIENT_STATIC_PATH),
  }),
);

export { app as staticApp };

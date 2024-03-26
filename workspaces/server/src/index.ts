import { serve } from '@hono/node-server';
import { app } from './routes';

const main = async () => {
  serve({ fetch: app.fetch, port: Number(process.env.PORT || 8000) }, (info) => {
    console.log(`Server running at: ${info.address}:${info.port}`);
  });
};

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

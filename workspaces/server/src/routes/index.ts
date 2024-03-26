import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';

import { staticApp } from './static';

const app = new Hono();

app.route('/', staticApp);

app.onError((cause) => {
  console.error(cause);

  if (cause instanceof HTTPException) {
    return cause.getResponse();
  }

  const err = new HTTPException(500, {
    cause: cause,
    message: 'Internal server error.',
  });
  return err.getResponse();
});

export { app };

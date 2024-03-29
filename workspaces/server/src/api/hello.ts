import { Hono } from 'hono';

const app = new Hono();

app.get('/hello', (c) => {
  return c.json({ message: 'Hello, world!' });
});

export { app as helloApi };

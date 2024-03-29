import { Hono } from 'hono';
import { client } from '../utils/prisma';

const app = new Hono();

app.get('/users', async (c) => {
  const users = await client.user.findMany();
  return c.json(users);
});

export { app as userApi };

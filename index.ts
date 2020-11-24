import express from 'express';
import { Router } from 'express';
import usersRouter from './routes/users.routes';

const app = express();
const PORT = 8000;
const routes = Router();

routes.use('/users', usersRouter);

export default routes;

app.get('/', (req,res) => res.send('Express + TypeScript Server!!!'));
app.use(routes);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
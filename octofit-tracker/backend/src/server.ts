import express from 'express';
import { connectDatabase } from './config/database';
import apiRouter from './routes';

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(express.json());
app.use((_request, response, next) => {
  response.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*');
  response.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/health', (_request, response) => {
  const codespaceName = process.env.CODESPACE_NAME;
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${port}`;
  response.json({ status: 'ok', baseUrl });
});

app.use('/api', apiRouter);

app.use((error: unknown, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error('API request failed:', error);
  response.status(500).json({ error: 'Internal server error' });
});

async function startServer(): Promise<void> {
  try {
    await connectDatabase();
    app.listen(port, () => {
      console.log(`OctoFit Tracker API listening on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to start OctoFit Tracker API:', error);
    process.exitCode = 1;
  }
}

void startServer();

export default app;
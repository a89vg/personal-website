import express from 'express';
import cors from 'cors';
import contactRouter from './routes/contact.js';

const app = express();

app.set('trust proxy', 1);
app.use(cors({ origin: 'https://www.a89vg.net' }));

// In Lambda, serverless-http may pass body as a Buffer.
// Parse it before express.json() so the body is available.
app.use((req, _res, next) => {
  if (Buffer.isBuffer(req.body)) {
    try {
      req.body = JSON.parse(req.body.toString());
    } catch { /* let express.json() handle it */ }
  }
  next();
});
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api', contactRouter);

app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

if (!process.env.AWS_LAMBDA_FUNCTION_NAME) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
}

export default app;

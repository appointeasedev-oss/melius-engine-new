import express from 'express';
import { z } from 'zod';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { ZodError } from 'zod';

type ApiError = {
  statusCode: number;
  message: string;
  errors?: Record<string, string[]>;
};

const app = express();

// Configuration
const PORT = process.env.PORT || 3001;
const API_PREFIX = '/api/v1';

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(API_PREFIX, apiLimiter);

// Validation schemas
const createPostSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
  authorId: z.string().uuid()
});

// Routes
app.get(`${API_PREFIX}/health`, (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post(`${API_PREFIX}/posts`, (req, res, next) => {
  try {
    const validated = createPostSchema.parse(req.body);
    // In real implementation, process the data here
    res.status(201).json({ data: validated });
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = error.flatten().fieldErrors;
      next({
        statusCode: 400,
        message: 'Validation failed',
        errors
      });
    } else {
      next(error);
    }
  }
});

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    statusCode: 404,
    message: 'Endpoint not found'
  });
});

// Error handler
app.use((err: ApiError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  
  res.status(statusCode).json({
    error: {
      statusCode,
      message,
      ...(err.errors && { errors: err.errors })
    }
  });
});

// Server startup
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (error: NodeJS.ErrnoException) => {
  console.error('Server startup error:', error);
  process.exit(1);
});

export { app }; // Export for testing purposes

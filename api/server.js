import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Anthropic from '@anthropic-ai/sdk';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Enable CORS
app.use(cors());

app.use(express.json());

// Serve the static files from the frontend dist folder
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// ✅ Define Rate Limiting Middleware
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // ⛔ Limit each IP to 5 requests per minute
  message: { error: 'Too many requests, please try again later.' }, // Response when limit is exceeded
  headers: true, // Show rate limit info in response headers
});

// ✅ Apply rate limiting **ONLY** to the `/get-recipe` route
app.post('/api/get-recipe', limiter, async (req, res) => {
  const { ingredients } = req.body;

  const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page, NO additional text for introduce the recipe, NO conclusion.
`;

if (!ingredients || !Array.isArray(ingredients)) {
  return res.status(400).json({ error: 'Invalid ingredients format' });
}


  try {
    const msg = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `I have ${ingredients.join(', ')}. Please give me a recipe you'd recommend I make! please no introduction or final sentence`,
        },
      ],
    });

    res.json({ recipe: msg.content[0].text });
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
});

if (process.env.NODE_ENV !== "production") {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

// ✅ Start the server Locally
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});

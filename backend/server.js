import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS
import Anthropic from '@anthropic-ai/sdk';

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Enable CORS
app.use(cors());

// Serve the static files from the frontend dist folder
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Backend API route
app.post('/get-recipe', express.json(), async (req, res) => {
  const { ingredients } = req.body;

  const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page, NO additional text for introduce the recipe, NO conclusion.
`

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

// Serve frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});

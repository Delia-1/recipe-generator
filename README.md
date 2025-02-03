# Recipe Generator 🍳

**Recipe Generator** is a React-based application that generates recipes based on the ingredients you have on hand. It uses the Anthropic AI API to suggest creative and practical recipes.

---

## Features
- **Add ingredients**: Enter the ingredients you have available.
- **Remove ingredients**: Remove items from your list.
- **Generate recipes**: Click "Find a recipe" to get a personalized suggestion.
- **User-friendly interface**: A simple and intuitive application.

---

## Upcoming Features 🚀
Here are the features planned for future updates:
- **Dynamic prompt modification**: Adapt the prompt based on the type of recipe desired (e.g., vegan, quick, etc.).
- **Save recipes**: Allow users to save their favorite recipes.
- **Calorie calculation**: Automatically calculate the calories of generated recipes based on the ingredients used.

---

## Technologies Used
- **React.js**: Framework for building the user interface.
- **Vite**: A fast development environment.
- **Express.js**: Backend for secure API calls.
- **FontAwesome**: Icons for enhancing the interface.
- **Anthropic AI SDK**: Recipe generation powered by AI.



🍽️ Recipe Generator

This is a React + Express web app that generates cooking recipes based on user-provided ingredients using the Anthropic API.

---

 ⚒️ Technologies Used
- React.js: Framework for building the user interface.
- Vite: A fast development environment.
- React Markdown: To ease the recipe display
- Node.js
- Express.js: Backend for secure API calls.
- FontAwesome: Icons for enhancing the interface.
- Anthropic AI SDK: Recipe generation powered by AI.
- Security: Express-rate-limit, CORS


🚀 Features

✅ Frontend

Dynamic Ingredient Input: Users can add or delete ingredients to receive a relevant recipe.

React Markdown Rendering: Recipes are formatted properly using Markdown.

Generate recipes: Click "Find a recipe" to get a personalized suggestion.

User-friendly interface: A simple and intuitive application.

XSS Protection: Prevents malicious script injection (React's built-in security + DOMPurify support if needed).


✅ Backend

Secure API Requests:

Rate-limited to 5 requests per minute per IP (prevents abuse).

CORS-restricted: Only allows requests from the official frontend.

Anthropic API Integration: Generates recipes with an AI assistant.

Error Handling: Catches API errors and provides user-friendly messages.

✅ Security Improvements

Environment Variables: API keys are hidden using .env.

Rate Limiting: Express middleware to prevent excessive requests.

CORS Restrictions: Blocks unauthorized domains from accessing the API.

HTTPS Deployment Ready: Ensures secure connections.




 Upcoming Features 🚀
Here are the features planned for future updates:
- Dynamic prompt modification: Adapt the prompt based on the type of recipe desired (e.g., vegan, quick, etc.).
- Save recipes: Allow users to save their favorite recipes.
- Calorie calculation: Automatically calculate the calories of generated recipes based on the ingredients used.




🛠️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/yourusername/recipe-generator.git
cd recipe-generator

2️⃣ Install Dependencies

npm install

3️⃣ Set Up Environment Variables

Create a .env file in the backend folder:

ANTHROPIC_API_KEY=your_secret_key

4️⃣ Start the Development Server

Backend:

cd backend
npm start

Frontend:

cd frontend
npm run dev

The app will run at http://localhost:3000 (backend) and http://localhost:5173 (frontend).

📌 Usage

Enter Ingredients: Type and add ingredients.

Generate Recipe: Click the "Find Recipe" button.

View Results: The AI-generated recipe will be displayed in a structured Markdown format.

🛡️ Security Measures

🔐 1. XSS Protection

React escapes user input by default, preventing injection attacks.


🚦 2. API Rate Limiting

Limited to 5 requests per minute per IP using express-rate-limit.

Prevents excessive API usage and abuse.

🌍 3. CORS Restrictions

API only accepts requests from authorized domains (prevents unauthorized usage).

🚀 Deployment

Deploy Backend to Vercel/Render/Fly.io

Deploy Frontend to Netlify/Vercel

Ensure .env is hidden (backend only)


🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss your proposal.


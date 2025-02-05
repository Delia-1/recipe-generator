export async function getRecipeFromChefClaude(list) {
  const API_BASE_URL = import.meta.env.VITE_API_URL || ""; // Ensure dynamic backend URL

  const response = await fetch(`${API_BASE_URL}/api/get-recipe`, { // Add /api to route
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: list }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }

  const data = await response.json();
  return data.recipe;
}

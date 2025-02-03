export async function getRecipeFromChefClaude(list) {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get-recipe`, {
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

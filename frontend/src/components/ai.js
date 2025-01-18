export async function getRecipeFromChefClaude(list) {
  console.log("API called with ingredients:", list);
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/get-recipe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: list }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }

  const data = await response.json();
  console.log("Response from server:", data);
  return data.recipe;
}

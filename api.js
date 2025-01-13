const API_URL = "https://catfact.ninja/fact";

export const fetch_cat_facts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch data");
  return await response.json();
};

export const post_cat_fact = async (fact) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fact }),
  });
  if (!response.ok) throw new Error("Failed to add fact");
  return await response.json();
};

export async function fetchProcessedWord(word) {
  const response = await fetch("https://your-app.onrender.com/process_word", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ word }),
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(data.error || "Failed to fetch");
  }
}

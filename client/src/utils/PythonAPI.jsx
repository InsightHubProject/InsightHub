export async function fetchExpectedPrice(carDetails) {
  // Log the payload to verify the structure
  console.log("Sending car details:", carDetails);

  try {
    const response = await fetch("https://thammenha.onrender.com/predict/ksa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carDetails),
    });

    const data = await response.json();

    // Check if response is okay
    if (response.ok) {
      return data.Predicted_Price; // Use 'Predicted_Price' based on backend response
    } else {
      // Log and throw the error for better debugging
      console.error("Error response:", data);
      throw new Error(data.error || "Failed to fetch expected price");
    }
  } catch (error) {
    // Log fetch errors
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch expected price. Check the input data or server configuration.");
  }
}

// pages/api/products.js
export default async function handler(req, res) {
  try {
    const response = await fetch("https://localhost:7101/products/3");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
}

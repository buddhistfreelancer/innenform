export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // For now, just return the data.
  // Later you can save to database, send email, etc.
  console.log("Form received:", req.body);

  res.status(200).json({ message: "Form submitted successfully!" });
}

// Copilot can help auto-suggest function structure:
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Missing fields" });
  // Save logic here (Copilot might suggest DB integration)
  res.status(201).json({ message: "User created", data: { name, email } });
};

exports.getUser = (req, res) => {
  const { id } = req.params;
  // Mock response for demo
  res.status(200).json({ id, name: "Demo User", email: "demo@example.com" });
};

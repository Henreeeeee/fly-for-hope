export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body || {};
    return res.status(200).json({ ok: true, received: data });
  }
  return res.status(405).json({ error: "Method not allowed" });
}

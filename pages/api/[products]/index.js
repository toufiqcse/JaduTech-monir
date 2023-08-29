import portfolio from "../../../data/portfolio";

export default function handler(req, res) {
  try {
    if (req.method === "GET") {
      res.status(200).json(portfolio);
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

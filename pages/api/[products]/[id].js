import portfolio from "../../../data/portfolio";

export default function handler(req, res) {
  try {
    const { id } = req.query;
    console.log(id);
    if (req.method == "GET") {
      const products = portfolio.find((product) => product.title === id);

      if (!products) {
        return res.status(404).json({ message: "Product not Found" });
      }
      return res.status(200).json(products);
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

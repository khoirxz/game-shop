import ProductModel from "../models/ProductModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const response = await ProductModel.find().sort({ createdAt: -1 });

    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

export const getOneProduct = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const data = await ProductModel.findById({ _id });

    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ status: "error", message: "product not found" });
  }
};

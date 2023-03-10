import express from "express";

import {
  getAllProducts,
  getOneProduct,
} from "../controllers/PublicController.js";

const router = express.Router();

router.get("/public/products", getAllProducts);
router.get("/public/products/:slug", getOneProduct);

export default router;

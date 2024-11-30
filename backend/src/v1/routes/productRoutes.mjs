import express from "express";
import ProductController from "../controllers/productController.mjs";
import upload from "../../../middleware/UploadManager.mjs";
const router = express.Router();

router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProduct);
router.get("/register/:id?", ProductController.registerForm);
router.post(
  "/add/:id?",
  upload.single("image"),
  ProductController.registerProduct
);
router.post("/:id", upload.single("image"), ProductController.registerProduct);
router.delete("/delete", ProductController.deleteProduct);

export default router;

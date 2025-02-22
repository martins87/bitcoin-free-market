import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    userEmail: String,
    title: String,
    price: String,
    description: String,
    picture: String,
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;

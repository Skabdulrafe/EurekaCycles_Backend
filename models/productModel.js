import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },              // Product name (e.g., Hero Cycles ENZO)

    brand: { type: String, required: true },             // e.g., Hero Cycles
    model: { type: String },                             // e.g., ENZO

    description: { type: String, required: true },       // Product details

    price: {
      mrp: { type: Number, required: true },             // Maximum retail price
      offer: { type: Number, default: 0 },               // Offer/Discount in Rs (e.g., 2000)
      emiOptions: {
        startingEmi: { type: Number },                   // e.g., 1787
        minInstallment: { type: Number },                // e.g., 1726
        durations: [{ type: Number }]                    // e.g., [3, 6, 9]
      }
    },

    // quantity: { type: Number, required: true, default: 0 },

    images: { type: [String] },          // Array of image URLs

    productCategory: { type: [String], required: true }, // e.g., ["Bicycle", "MTB"]

    variants: {
      tyreSize: [
        {
          label: { type: String },                       // e.g., "26T"
          sizeCms: { type: Number }                      // e.g., 66
        }
      ]
    },

    // rating: {
    //   value: { type: Number, default: 0 },               // Average rating
    //   count: { type: Number, default: 0 }                // No. of reviews
    // },

    availability: {
      type: String,
      enum: ["InStock", "OutOfStock", "PreOrder"],
      default: "InStock"
    }
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;
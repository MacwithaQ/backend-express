const { Schema, model } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: String,
    description: String,
    color: String,
    quantity: {
      type: Number,
      min: 0,
    },
    price: {
      type: Number,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = model("Product", ProductSchema);

import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
    nome: String,
    urlImage: String,
    value: Number,
    category: String,
    description: String
}, {
    timestamps: true
})

export default model("Product", ProductSchema)
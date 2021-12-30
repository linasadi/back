import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Product';
const COLLECTION_NAME = 'Products';

const productSchema = new mongoose.Schema({
    CAPSULE_TEXT: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    CATALOG_PRICE: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    GENRE: {
        type: mongoose.Schema.Types.String,
        required: true,
    }
}, {
    timestamps: true,
});

export const ProductModel = mongoose.model(DOCUMENT_NAME, productSchema, COLLECTION_NAME);
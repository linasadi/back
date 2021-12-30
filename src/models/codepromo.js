import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Codepromo';
const COLLECTION_NAME = 'Codepromos';

const codepromoSchema = new mongoose.Schema({
    produit: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    marque: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
        trim: true,
    },
    boutique: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    durée: {
        type: mongoose.Schema.Types.Number,
        required: true, 
    },
    region: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
}, {
    timestamps: true,
});

export const CodepromoModel = mongoose.model(DOCUMENT_NAME, codepromoSchema, COLLECTION_NAME);
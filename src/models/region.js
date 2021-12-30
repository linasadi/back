import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Region';
const COLLECTION_NAME = 'regions';

const regionSchema = new mongoose.Schema({
    LATITUDE: {
        type: mongoose.Schema.Types.String,
        required: false,
    },
    LONGITUDE: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    PREF_NAME: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    PREFECTUAL_OFFICE: {
        type: mongoose.Schema.Types.String,
        required: false,
    },
    
    
}, {
    timestamps: true,
});

export const RegionModel = mongoose.model(DOCUMENT_NAME, regionSchema, COLLECTION_NAME);
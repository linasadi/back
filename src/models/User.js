import mongoose from 'mongoose';
const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'users';

const userSchema = new mongoose.Schema({
    PREF_NAME: {
        type: mongoose.Schema.Types.String,
        required: false,
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    AGE: {
        type: mongoose.Schema.Types.Number,
        required: false,
    },
    SEX_ID: {
        type: mongoose.Schema.Types.String,
        required: false,
    },

    REG_DATE: {
        type: mongoose.Schema.Types.String,
        required: false,
    },


}, {
    timestamps: true,
});

export const UserModel = mongoose.model(DOCUMENT_NAME, userSchema, COLLECTION_NAME);
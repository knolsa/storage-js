
import { TABLES_PREFIX } from '../utils'
import { Schema } from 'mongoose'

/**
 * SourceSchema
 */
export const SourceSchema = new Schema({
    // url hash
    _id: String,
    title: {
        type: String,
        match: /^[\S]+[ ][\S]{3,100}/,
        required: true
    },
    domain: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    host: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    path: {
        type: String,
        minlength: 1,
        maxlength: 100,
        required: true
    },
    lang: {
        type: String,
        match: /^[a-z]{2}$/,
        lowercase: true,
        required: true
    },
    userId: {
        type: String,
        trim: true,
        maxlength: 40,
        minlength: 1,
        required: true
    },

    updatedAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
}, {
        collection: [TABLES_PREFIX, 'sources'].join('_')
    });

SourceSchema.set('toObject', {
    getters: true
});

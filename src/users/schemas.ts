
import { TABLES_PREFIX } from '../utils'
import { Schema } from 'mongoose'

/**
 * UserSettingsSchema
 */
export const UserSettingsSchema = new Schema({
    // user id
    _id: String,
    updatedAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
}, {
        collection: [TABLES_PREFIX, 'user_settings'].join('_')
    })

UserSettingsSchema.set('toObject', {
    getters: true
})

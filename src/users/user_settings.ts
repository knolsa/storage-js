
import { UserSettingsSchema } from './schemas'
import { Schema, model as createModel, Connection } from 'mongoose'
import { MongoModel } from '../mongo_model'

export type UserSettings = {
    id?: string
    createdAt?: Date
    updatedAt?: Date
}

export class UserSettingsModel extends MongoModel<UserSettings> {
    constructor(connection: Connection) {
        const model = connection.model('UserSettings', UserSettingsSchema)
        super(model)
    }
}


import { SourceSchema } from './schemas'
import { Schema, Connection } from 'mongoose'
import { MongoModel } from '../mongo_model'

export type Source = {
    id?: string
    title?: string
    lang?: string
    domain?: string
    host?: string
    path?: string
    url?: string
    userId?: string
    createdAt?: Date
    updatedAt?: Date
}

export class SourceModel extends MongoModel<Source> {
    constructor(connection: Connection) {
        const model = connection.model('Source', SourceSchema)
        super(model)
    }
}

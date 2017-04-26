
import { SourceSchema } from './schemas'
import { Schema, model as createModel, Connection } from 'mongoose'
import { MongoModel } from '../mongo_model'
import { IPlainObject } from '../utils'

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

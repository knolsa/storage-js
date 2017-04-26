
import { KnolSchema } from './schemas'
import { Schema, model as createModel, Connection } from 'mongoose'
import { MongoModel } from '../mongo_model'
import { IPlainObject } from '../utils'

export type KnolSourceInfo = {
    id?: string
    votes?: number
}

export type KnolTagInfo = {
    id?: string
    votes?: number
}

export type Knol = {
    id?: string
    title?: string
    lang?: string
    userId?: string
    sources?: KnolSourceInfo[]
    tags?: KnolTagInfo[]
    createdAt?: Date
    updatedAt?: Date
}

export class KnolModel extends MongoModel<Knol> {
    constructor(connection: Connection) {
        const model = connection.model('Knol', KnolSchema)
        super(model)
    }
}

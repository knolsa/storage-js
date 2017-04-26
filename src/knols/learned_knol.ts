
import { LearnedKnolSchema } from './schemas'
import { Schema, Connection } from 'mongoose'
import { MongoModel } from '../mongo_model'

export type LearnedKnol = {
    id?: string
    date?: number
    userId?: string
    knolId?: string
    notes?: string
    createdAt?: Date
    updatedAt?: Date
}

export class LearnedKnolModel extends MongoModel<LearnedKnol> {
    constructor(connection: Connection) {
        const model = connection.model('LearnedKnol', LearnedKnolSchema)
        super(model)
    }
}

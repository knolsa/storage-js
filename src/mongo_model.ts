
import { mongoGet as get, _, Promise, IPlainObject, PlainObject, ModelData } from './utils'
import { Model } from 'mongoose'

export class MongoModel<T extends ModelData> {
    private model: Model<any>

    constructor(model: Model<any>) {
        this.model = model;
    }

    create(data: T): Promise<T> {
        if (!data) {
            Promise.reject(Error('`data` is required'));
        }
        try {
            data = this.normalizeCreate(data);
        } catch (e) {
            return Promise.reject(e);
        }
        return this.model.create(data).then(get);
    }

    normalizeCreate(data) {
        return data;
    }

    normalizeUpdate(data) {
        return data;
    }

    update(data: T): Promise<T> {
        if (!data) {
            Promise.reject(Error('`data` is required'));
        }
        try {
            data = this.normalizeUpdate(data);
        } catch (e) {
            return Promise.reject(e);
        }
        return this.model.findByIdAndUpdate(data.id, data).then(get)
    }

    remove(params: MongoParams): Promise<T> {
        if (!params) {
            Promise.reject(Error('`params` is required'));
        }

        return this.model.remove(params.where).then(get);
    }

    one(params: MongoParams) {
        if (!params) {
            Promise.reject(Error('`params` is required'));
        }

        return this.model.findOne(params.where, params.select).then(get);
    }

    count(where: MongoParamsWhere): Promise<number> {
        return this.model.count(where);
    }

    list(params: MongoParams): Promise<T[]> {
        if (!params) {
            Promise.reject(Error('`params` is required'));
        }

        return this.model
            .find(params.where)
            .select(params.select)
            .sort(params.sort)
            .skip(params.offset || 0)
            .limit(params.limit || 10)
            .exec()
            .then(get);
    }
}

export type MongoParamsWhere = PlainObject
export type MongoParams = {
    where?: MongoParamsWhere
    select?: string
    offset?: number
    limit?: number
    sort?: string
}

import * as mongoose from "mongoose";

export class Repository<T extends mongoose.Document> {

    protected model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this.model = schemaModel;
    }

    create(item: T, callback: (error: any, result: any) => void) {
        this.model.create(item, callback);

    }

    retrieve(callback: (error: any, result: any) => void) {
        this.model.find({}, callback);
    }

    retrieveWithOptions(criteria: Object, projection: Object, sortOptions: Object, populateOptions: Object, 
                        callback: (error: any, result: any) => void) {        
        if(populateOptions) {
            this.model.find(criteria).populate(populateOptions).sort(sortOptions).find(callback);
        } else {
            this.model.find(criteria).sort(sortOptions).find(callback);
        }
    }

    update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this.model.update({ _id: _id }, item, callback);

    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this.model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));

    }

    findById(_id: string, callback: (error: any, result: T) => void) {
        this.model.findById(_id, callback);
    }

    getCount(criteria: Object, callback: (error: any, result: any) => void) {
        this.model.count(criteria, callback);
    }

    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }

}
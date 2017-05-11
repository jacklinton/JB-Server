import mongoose from 'mongoose';
// Add moment for time/date conversions

const Schema = mongoose.Schema;

const ShowSchema = Schema({
    identifier: String,
    title: String,
    name: String,
    creator: String,
    description: String,
    date: Date,
    year: Date,
    addedDate: String,
    uploader: String,
    venue: String,
    coverage: String,
    taper: String,
    transferer: String,
    runtime: String,
    notes: String,
    source: String,
    sbd: Boolean,
    songs: [Schema.Types.ObjectId],
    updateddate: String,
});

const Show = mongoose.model('Show', ShowSchema);

export default Show;
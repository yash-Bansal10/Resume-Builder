import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({
    title: String,
    items: [{
        headline: String,
        subheadline: String,
        date: String,
        details: [String]
    }]
});

const resumeSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    title: {
        type: String, default: 'My Resume'
    },
    template: {
        type: String,
        default: 'classic',
    },
    personalDetails: {
        name: String,
        email: String,
        phone: String,
        website: String,
        linkedIn: String,
        github: String,
    },
    sections: [sectionSchema]
}, {timestamps: true});

export default mongoose.model('Resume',resumeSchema);
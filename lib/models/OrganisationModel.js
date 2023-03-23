import { model, models, Schema } from 'mongoose'

const organisationSchema = new Schema({
    id: Number,
    title: Number,
    code: String,
    active_services: Array,
    notifications: [{
        title: String,
        content: String,
    }],
    banks: [
        {
            personal_identifier: String,
            bank_name: String,
            account: String,
            ifsc: String,
        }
    ]
})

const Organisation = models.Organisations || model("Organisations", organisationSchema)

export default Organisation
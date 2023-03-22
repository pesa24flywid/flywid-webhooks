import Organisation from "lib/models/OrganisationModel";
import Connect from "lib/utils/mongoose";

export default async function CreateOrganisation(req, res) {

    if (req.method == 'POST') {
        await Connect()
        const result = await Organisation.create(req.body)
        if (result) res.status(200).json(result)
        if (!result) res.status(500).json({ message: "Error occured while creating organisation" })
    }
    if (req.method == 'GET') {
        if (req.body.id || req.body.code) {
            await Connect()
            const result = await Organisation.findOne({ id: req.body.id }) || Organisation.findOne({ code: req.body.code })
            if (result) res.status(200).json(result)
            if (!result) res.status(500).json({ message: "Error occured while creating organisation" })
        }
    }
    else {
        res.status(405).json({ message: `${req.method} method not allowed!` })
    }
}
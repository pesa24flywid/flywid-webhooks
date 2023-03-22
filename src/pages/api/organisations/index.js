import Organisation from "lib/models/OrganisationModel";
import Connect from "lib/utils/mongoose";

export default async function CreateOrganisation(req, res) {

    await Connect()
    if (req.method == 'POST') {
        const result = await Organisation.create(req.body)
        if (result) res.status(200).json(result)
        if (!result) res.status(500).json({ message: "Error occured while creating organisation" })
    }
    if (req.method == 'GET') {
        const result = await Organisation.find()
        if (result) res.status(200).json(result)
        if (!result) res.status(500).json({ message: "Error occured while creating organisation" })
    }
    else {
        res.status(405).json({ message: `${req.method} method not allowed!` })
    }
}
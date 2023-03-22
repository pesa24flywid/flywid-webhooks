import Organisation from "lib/models/OrganisationModel"
import Connect from "lib/utils/mongoose"

export default async function handler(req, res) {
    const { organisation_code } = req.query
    Connect()
    if (req.method == 'GET') {
        const result = await Organisation.find({ code: organisation_code })
        if (!result) return res.status(404).json({ message: "Organisation not found!" })
        if (result) return res.status(200).json(result)
    } else {
        return res.status(405).json({ message: "Method not allowed" })
    }
}
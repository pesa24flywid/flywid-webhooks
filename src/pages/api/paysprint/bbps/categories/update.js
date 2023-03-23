/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

import Connect from "lib/utils/mongoose"
import Category from "lib/models/PSCategory"

const addCategory = async (req, res) => {
    const { method } = req
    const { operator_category_name, status } = req.body
    if (req.method == "POST") {
        await Connect()
        if (operator_category_name) {
            const result = await Category.findOneAndUpdate({ "operator_category_name": `${operator_category_name}` }, req.body)
            if (result) {
                res.status(200).json({ error: "Category was updated!" })
            }
            if (!result) {
                res.status(500).json({ error: "Category was not found!" })
            }
        }
        else res.status(400).send("Please add category name.")
    }
    else {
        res.status(401).send(`${method} method not allowed!`)
    }
}

export default addCategory
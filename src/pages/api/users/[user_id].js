import User from "lib/models/UserModel"
import Connect from "lib/utils/mongoose"

export default async function handler(req, res) {
    const { user_id } = req.query
    Connect()
    if (req.method == 'GET') {
        const result = await User.find({ user_id: user_id })
        if (!result) return res.status(404).json({ message: "User not found!" })
        if (result) return res.status(200).json(result)
    } else {
        return res.status(405).json({ message: "Method not allowed" })
    }
}
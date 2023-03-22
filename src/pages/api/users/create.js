// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "lib/models/UserModel";
import Connect from "lib/utils/mongoose";

export default async function handler(req, res) {
  await Connect()
  if (req.method == 'POST') {
    const result = await User.create(req.body)
    if (!result) return res.status(500).json({ message: "User could not be added" })
    if (result) return res.status(200).json(result)
  }
  if (req.method == 'GET') {
    const result = await User.find(req.body)
    if (!result) return res.status(500).json({ message: "User could not be found" })
    if (result) return res.status(200).json(result)
  }
  else{
    return res.status(405).json({ message: "Method not allowed" })
  }
}


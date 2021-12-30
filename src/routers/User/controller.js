import {UserModel} from "../../models/User.js";

export const updateUser = async (req, res, next) => {
    try {
        if (!req.body) {
            res.status(400).json({ message: "No attributes found" });
        } else {
            const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body);
            if (updatedUser) res.status(200).json({ message: "User updated successfully" });
            res.status(400).json({ message: "User updated failed" });

        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}
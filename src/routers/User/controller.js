import {UserModel} from "../../models/User.js";

export const createPlayer = async (req, res, next) => {
    try {
        if (!req.body.firstName || !req.body.lastName || !req.body.number || !req.body.team) {
            res.status(400).json({ message: "Missing attributes" });
        } else {
            const team = await TeamModel.findById(req.body.team);
            if (!team) {
                res.status(400).json({ message: `Team with id ${req.body.team} not found` });
            } else {
                const createdPlayer = await PlayerModel.create(req.body);
                if (createdPlayer) {
                    res.status(200).json({ message: "Player created successfully" });
                } else {
                    res.status(400).json({ message: "Player creation failed" });
                }
            }
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const updatePlayer = async (req, res, next) => {
    try {
        if (!req.body) {
            res.status(400).json({ message: "No attributes found" });
        } else {
            if (req.body.team) {
                const updatedTeam = await TeamModel.findById(req.body.team);
                if (!team) res.status(404).json({ message: "Team not found" });
            }
            const updatedPlayer = await PlayerModel.findByIdAndUpdate(req.params.id, req.body);
            if (updatedPlayer) res.status(200).json({ message: "Player updated successfully" });
            res.status(400).json({ message: "Player updated failed" });

        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}
import clientPromise from "../../../config/dbConn";

async function getUsers(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("fraudDetection");
        const requiredData = await db.collection("settings").findOne({ _id: 'brand-name' })
        res.status(200).json(requiredData);
    } catch (err) {
        res.status(500).json({
            error: "An error occurred while connecting to the database",
        });
    }
}

export default getUsers;

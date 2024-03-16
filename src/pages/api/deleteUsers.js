import clientPromise from "../../../config/dbConn";

const deleteUsers = async (req, res) => {
    const client = await clientPromise;
    const db = client.db('fraudDetection');
    const { userIds } = req.body;
    try {
        const result = await db.collection('users').deleteMany({ emailAddress: { $in: userIds } });
        res.status(200).json({ message: `Deleted ${result.deletedCount} users` });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting users' });
    }
};

export default deleteUsers
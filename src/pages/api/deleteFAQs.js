import clientPromise from "../../../config/dbConn";

const deleteFAQs = async (req, res) => {
    const client = await clientPromise;
    const db = client.db('fraudDetection');
    const { FAQIds } = req.body;
    try {
        const result = await db.collection('faqs').deleteMany({ question: { $in: FAQIds } });
        res.status(200).json({ message: `Deleted ${result.deletedCount} users` });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting users' });
    }
};

export default deleteFAQs
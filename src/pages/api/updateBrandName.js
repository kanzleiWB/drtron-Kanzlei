import { MongoClient } from 'mongodb'
import clientPromise from '../../../config/dbConn'

const uploadVideoEmbedding = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    const data = req.body;
    if (!data) {
        return res.status(400).json({ message: 'No data provided' });
    }
    try {
        const client = await clientPromise;
        const db = client.db('fraudDetection');
        const collection = db.collection('settings');
        const doesValuesExist = await collection.findOne({ _id: 'brand-name' })
        if (doesValuesExist) {

            const result = await collection.findOneAndUpdate({ _id: "brand-name" }, {
                $set: {
                    brandTitle: req.body.brandTitle,
                }
            }, {
                returnOriginal: false
            })
            res.status(200).json({ data: result.value })
        }
        else {
            const result = await collection.insertOne(data)
        }
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export default uploadVideoEmbedding
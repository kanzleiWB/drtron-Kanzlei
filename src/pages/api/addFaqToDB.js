import clientPromise from '../../../config/dbConn';
import { NextResponse } from 'next/server';

const addFaqToDB = async (req, res) => {
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
        const collection = db.collection('faqs');
        const result = await collection.insertOne(data);
        return res.status(201).json({
            message: 'Data added to database',
        });
    } catch (error) {
        if (!error.response) {
            return res.status(500).json({
                message: 'Error adding data to database',
                error: 'Unknown error',
            });
        }
        return res.status(error.response.status).json({
            message: 'Error adding data to database',
            error: error.response.data,
        });
    }
};

export default addFaqToDB
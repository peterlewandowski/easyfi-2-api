import { MongoClient } from 'mongodb'
import { serviceAccount } from '../secrets.js';

export default function dbConnect() {
    const client = new MongoClient(serviceAccount)
    return client.db('easyfi-2-api')
}
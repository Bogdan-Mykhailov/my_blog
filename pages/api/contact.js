import { MongoClient } from "mongodb";
import { NAME, URL } from "@/constants";


const handler = async (req, res) => {
  if (req.method === 'POST') {
    const {email, name, message} = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({message: "Invalid input."})
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    }

    let client;

    try {
      client = await MongoClient.connect(URL)
    } catch (err) {
      res.status(500).json({message: err.message || 'Could not connect to database.'})
      return;
    }

    const db = client.db(NAME);

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (err) {
      res.status(500).json({message: err.message || 'Storing message failed!'})
      await client.close();
    }

    await client.close();

    res.status(201).json({message: 'Successfully stored message!', newMessage})
  }
};

export default handler;

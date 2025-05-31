import { classes } from '$lib/server/db.js';
import { ObjectId } from 'mongodb';

export async function load({ params }) {
  const cls = await classes.findOne({ _id: new ObjectId(params.id) });
  return {
    classData: {
      ...cls,
      _id: cls._id.toString()
    }
  };
}
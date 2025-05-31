import { species } from '$lib/server/db.js';
import { ObjectId } from 'mongodb';

export async function load({ params }) {
  const sps = await species.findOne({ _id: new ObjectId(params.id) });
  return {
    speciesData: {
      ...sps,
      _id: sps._id.toString()
    }
  };
}
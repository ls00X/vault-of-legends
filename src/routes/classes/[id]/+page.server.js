import { classes } from '$lib/server/db.js';
import { ObjectId } from 'mongodb';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  console.log('📥 ID aus URL:', params.id);

  let classData;
  try {
    classData = await classes.findOne({ _id: new ObjectId(params.id) });
    console.log('✅ Klasse gefunden:', classData);
  } catch (e) {
    console.error('❌ Fehler beim Abrufen aus MongoDB:', e);
    throw error(500, 'Fehler beim Laden der Klasse');
  }

  if (!classData) {
    throw error(404, 'Klasse nicht gefunden');
  }

  return {
    classData: {
      ...classData,
      _id: classData._id.toString()
    }
  };
}
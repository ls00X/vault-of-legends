import { getAllClasses } from '$lib/server/db.js';

export async function load() {
  const raw = await getAllClasses();
  const classList = raw.map(c => ({
    ...c,
    _id: c._id.toString()
  }));
  return {
    classList
  };
}

import { getAllCharacters, classes, species } from '$lib/server/db.js';

export async function load() {
  const raw = await getAllCharacters();

  const classList = await classes.find().toArray();
  const classMap = new Map(classList.map(c => [c._id.toString(), c.name]));

  const speciesList = await species.find().toArray();
  const speciesMap = new Map(speciesList.map(s => [s._id.toString(), s.name]));

  const characterList = raw.map(c => ({
    ...c,
    _id: c._id.toString(),
    classId: c.classId?.toString(),       
    speciesId: c.speciesId?.toString(),   
    className: classMap.get(c.classId?.toString()) || 'Unbekannt',
    speciesName: speciesMap.get(c.speciesId?.toString()) || 'Unbekannt'
  }));

  return {
    characterList
  };
}

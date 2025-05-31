// Species importieren
import { getAllSpecies } from '$lib/server/db.js';

export async function load() {
    const raw = await getAllSpecies();
    //  ObjectId → String umwandeln
    const speciesList = raw.map(s => ({
        ...s,
        _id: s._id.toString()
    }));
    return {
        speciesList
    };
}
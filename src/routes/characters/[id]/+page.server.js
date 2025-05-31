import { characters, classes, species } from '$lib/server/db.js';
import { ObjectId } from 'mongodb';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    const id = params.id;

    const character = await characters.findOne({ _id: new ObjectId(id) });
    if (!character) {
        return {
            status: 404,
            error: new Error('Charakter nicht gefunden')
        };
    }

    const classData = await classes.findOne({ _id: character.classId });
    const speciesData = await species.findOne({ _id: character.speciesId });

    return {
        character: {
            ...character,
            _id: character._id.toString(),
            classId: character.classId.toString(),
            speciesId: character.speciesId.toString(),
            className: classData?.name || 'Unbekannt',
            speciesName: speciesData?.name || 'Unbekannt'
        }
    };
}

export const actions = {
    delete: async ({ params }) => {
        await characters.deleteOne({ _id: new ObjectId(params.id) });
        throw redirect(303, '/characters');
    }
};

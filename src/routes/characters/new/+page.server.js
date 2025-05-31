import { insertCharacter, classes, species } from '$lib/server/db.js';
import { fail, redirect } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export async function load() {
    // Lade Klassen & Spezies zur Auswahl im Formular
    const classRaw = await classes.find().toArray();
    const speciesRaw = await species.find().toArray();
    const classList = classRaw.map(c => ({
        ...c,
        _id: c._id.toString()
    }));

    const speciesList = speciesRaw.map(s => ({
        ...s,
        _id: s._id.toString()
    }));

    return {
        classList,
        speciesList
    };
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        console.log('📦 Eingehende Formulardaten:', Object.fromEntries(formData.entries()))

        const character = {
            name: formData.get('name'),
            level: Number(formData.get('level')),
            classId: new ObjectId(formData.get('classId')),
            speciesId: new ObjectId(formData.get('speciesId')),
            armorClass: Number(formData.get('armorClass')),
            proficiencyBonus: Number(formData.get('proficiencyBonus')),
            hitPoints: Number(formData.get('hitPoints')),
            background: formData.get('notes'),
            imageUrl: formData.get('imageUrl'),
            abilities: {
                strength: {
                    score: Number(formData.get('strengthScore')),
                    mod: Number(formData.get('strengthMod'))
                },
                dexterity: {
                    score: Number(formData.get('dexterityScore')),
                    mod: Number(formData.get('dexterityMod'))
                },
                constitution: {
                    score: Number(formData.get('constitutionScore')),
                    mod: Number(formData.get('constitutionMod'))
                },
                intelligence: {
                    score: Number(formData.get('intelligenceScore')),
                    mod: Number(formData.get('intelligenceMod'))
                },
                wisdom: {
                    score: Number(formData.get('wisdomScore')),
                    mod: Number(formData.get('wisdomMod'))
                },
                charisma: {
                    score: Number(formData.get('charismaScore')),
                    mod: Number(formData.get('charismaMod'))
                },
             },
             /* eventuell später Implementieren mit AutoEncryptionLoggerLevel.Berechnung der Modifikatoren
             skills: [
                        {
                            name: formData.get('skill1name'),
                            bonus: Number(formData.get('skill1bonus'))
                        },
                        {
                            name: formData.get('skill2name'),
                            bonus: Number(formData.get('skill2bonus'))
                        }
                       
                    ] */
            };
    
            await insertCharacter(character);
            throw redirect(303, '/characters');
        }
    };

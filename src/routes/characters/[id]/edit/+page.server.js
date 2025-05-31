import { characters, classes, species } from '$lib/server/db.js';
import { ObjectId } from 'mongodb';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const id = new ObjectId(params.id);
  const char = await characters.findOne({ _id: id });
  const classList = await classes.find().toArray();
  const speciesList = await species.find().toArray();

  return {
    character: {
      ...char,
      _id: char._id.toString(),
      classId: char.classId?.toString(),
      speciesId: char.speciesId?.toString()
    },
    classList: classList.map(c => ({ ...c, _id: c._id.toString() })),
    speciesList: speciesList.map(s => ({ ...s, _id: s._id.toString() }))
  };
}

export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();

    const updatedCharacter = {
      name: formData.get('name'),
      level: Number(formData.get('level')),
      classId: new ObjectId(formData.get('classId')),
      speciesId: new ObjectId(formData.get('speciesId')),
      armorClass: Number(formData.get('armorClass')),
      hitPoints: Number(formData.get('hitPoints')),
      proficiencyBonus: Number(formData.get('proficiencyBonus')),
      imageUrl: formData.get('imageUrl'),
      background: formData.get('notes'),

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
        }
      }
    };

    await characters.updateOne(
      { _id: new ObjectId(params.id) },
      { $set: updatedCharacter }
    );

    throw redirect(303, `/characters/${params.id}`);
  }
};

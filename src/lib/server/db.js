// Import MongoClient-Klasse und ObjectId-Klasse aus MongoDB-Bibliothek
import { MongoClient, ObjectId } from 'mongodb';

// Import Umgebungsvariablen (z. B. MONGODB_URI) aus der .env-Datei
// Achtung: `$env/static/private` bedeutet, dass diese Variable nur auf dem Server verfügbar ist
import { MONGODB_URI } from '$env/static/private';

// neue Verbindung zur MongoDB-Datenbank, mit der URI aus der Umgebungsvariablen
const client = new MongoClient(MONGODB_URI);

// Zugriff auf Datenbank mit dem Namen 'vaultDB' aus dem Cluster
const db = client.db('vaultDB');

// Zugriff auf Collections
// Diese Konstanten können wir in anderen Funktionen verwenden, um auf die Daten zuzugreifen
export const characters = db.collection('characters');
export const classes = db.collection('classes');
export const species = db.collection('species');


// === FUNKTIONEN ==== //


// Diese Funktion lädt alle Einträge aus der Collection 'classes'
// `.find()` holt alle Dokumente, `.toArray()` wandelt sie in ein Array um
export async function getAllClasses() {
  return await classes.find().toArray();
}

// Diese Funktion holt eine einzelne Klasse anhand ihrer ID
// `ObjectId(id)` wandelt die String-ID in das spezielle MongoDB-ID-Format um
// `findOne({ _id: ... })` sucht nach einem Dokument mit passender ID
export async function getClassById(id) {
  return await classes.findOne({ _id: new ObjectId(id) });
}

// Diese Funktion lädt alle Einträge aus der Collection 'species'
// `.find()` holt alle Dokumente, `.toArray()` wandelt sie in ein Array um
export async function getAllSpecies() {
  return await species.find().toArray();
}

// Diese Funktion holt eine einzelne Species anhand ihrer ID
// `ObjectId(id)` wandelt die String-ID in das spezielle MongoDB-ID-Format um
// `findOne({ _id: ... })` sucht nach einem Dokument mit passender ID
export async function getSpeciesById(id) {
  return await species.findOne({ _id: new ObjectId(id) });
}

// Neuen Charakter speichern
export async function insertCharacter(characterData) {
  return await characters.insertOne(characterData);
}

// Alle Charaktere laden
export async function getAllCharacters() {
  return await characters.find().toArray();
}


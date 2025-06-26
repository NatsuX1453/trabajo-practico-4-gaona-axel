import Character from '../models/character.model.js';

export const CreateCharacter = async (req, res) => {};
const { name, ki, race, gender, description } = req.body;
try {
	const character = await Character.create(req.body);
} catch (error) {
	res.status(500).json({ message: error.message });
}

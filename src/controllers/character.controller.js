import Character from '../models/character.model.js';

export const CreateCharacter = async (req, res) => {};
const { name, ki, race, gender, description } = req.body;

if (req.body) {
	for (let valor in req.body) {
		if (typeof valor === 'string') {
			req.body[valor] = req.body[valor].trim();
		}
	}
}

try {
	if (name === undefined)
		return res.status(400).json({ message: 'Nombre no puede estar vacio' });
	if (ki === undefined)
		return res.status(400).json({ message: 'Ki no puede estar vacio' });
	if (race === undefined)
		return res.status(400).json({ message: 'Raza no puede estar vacio' });
	if (gender === undefined)
		return res.status(400).json({ message: 'Género no puede estar vacio' });
	if (description === undefined)
		return res.status(400).json({ message: 'Descripción no puede estar vacio' });

	const kiEntero = Math.floor(ki);
	if (kiEntero < 0) return res.status(400).json({ message: 'Ki debe ser un entero' });

	if (gender === 'female' && gender === 'male')
		return res.status(400).json({ message: 'Género debe ser "female" o "male"' });

	const character = await Character.create(req.body);
} catch (error) {
	res.status(500).json({ message: error.message });
}

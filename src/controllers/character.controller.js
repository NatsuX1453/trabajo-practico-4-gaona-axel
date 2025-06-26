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

	if (gender === 'Female' && gender === 'Male')
		return res.status(400).json({ message: 'Género debe ser "Female" o "Male"' });

	if (typeof description !== 'string' || description.length < 10)
		return res
			.status(400)
			.json({ message: 'Descripción debe ser una cadena de al menos 10 caracteres' });

	const nombreUnico = await Character.findOne({ where: { name } });
	if (nombreUnico !== null) return res.status(400).json({ message: 'Nombre ya existe' });

	const character = await Character.create({ name, ki, race, gender, description });

	res.status(201).json({ message: 'Personaje creado exitosamente', character });
} catch (error) {
	res.status(500).json({ message: error.message });
}

export const actualizarPersonaje = async (req, res) => {
	const { name, ki, race, gender, description } = req.body;

	if (req.body) {
		for (let valor in req.body) {
			if (typeof valor === 'string') {
				req.body[valor] = req.body[valor].trim();
			}
		}
	}

	try {
		const nombreUnico = await Character.findOne({ where: { name } });
		if (nombreUnico !== null)
			return res.status(400).json({ message: 'Nombre ya existe' });

		const [updated] = await Character.update(name, ki, race, gender, description, {
			where: { id: req.params.id },
		});

		if (updated.length === 0)
			return res.status(404).json({ message: 'Personaje no encontrado' });
		return res.status(200).json({ message: 'Personaje actualizado exitosamente' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteCharacter = async (req, res) => {
	try {
		const deleted = await Character.destroy({ where: { id: req.params.id } });

		if (deleted > 0)
			return res.status(200).json({ Message: 'el personaje a sido eliminado.' });

		return res.status(404).json({ errorMessage: 'el personaje no fue encontrado.' });
	} catch (error) {
		res.status(500).json({ Message: error.message });
	}
};

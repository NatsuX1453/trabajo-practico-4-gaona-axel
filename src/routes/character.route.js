import express from 'express';
import {
	CreateCharacter,
	deleteCharacter,
	// getALLCharacters,
	// getCharacterById,
	actualizarPersonaje,
} from '../controllers/character.controller.js';
const router = express.Router();

router.post('/characters', CreateCharacter);
// router.get('/characters', getALLCharacters);
// router.get('/characters/:id', getCharacterById);
router.put('/characters/:id', actualizarPersonaje);
router.delete('/characters/:id', deleteCharacter);

export default router;

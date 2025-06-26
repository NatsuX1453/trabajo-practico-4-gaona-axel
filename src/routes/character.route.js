import express from 'express';
import {
	CreateCharacter,
	deleteCharacter,
	actualizarPersonaje,
} from '../controllers/character.controller.js';
const router = express.Router();

router.post('/characters', CreateCharacter);
router.get('/characters/:id', getCharacterbyID);
router.get('/characters', getAllCharacters);
router.put('/characters/:id', actualizarPersonaje);
router.delete('/characters/:id', deleteCharacter);

export default router;

const express = require('express');
const db = require('./../db/db');
const router = express.Router();
const PersonController = require('./../controllers/person');
const PersonService = require('./../services/person');
const PersonDAO = require('./../daos/person');

const personDao = new PersonDAO(db);
const personService = new PersonService(personDao);
const personController = new PersonController(personService);
router.post('/person', personController.createPerson.bind(personController));
router.get('/person', personController.findPerson.bind(personController));

module.exports = router;

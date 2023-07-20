class PersonService {
  constructor(dao) {
    this.dao = dao;
  }

  createPerson(personDTO) {
    const { firstName, lastName, email } = personDTO;
    return this.dao.createPerson(firstName, lastName, email);
  }
}

module.exports = PersonService;

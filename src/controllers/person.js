class PersonController {
  service;
  constructor(personService) {
    this.service = personService;
  }

  async createPerson(req, res) {
    try {
      const id = await this.service.createPerson(req.body);
      res.status(200).json(id);
    } catch (error) {
      console.error(error);
    }
  }

  async findPerson(req, res) {
    try {
      const persons = await this.service.find(req.body);
      res.status(200).json(persons);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = PersonController;

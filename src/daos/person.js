class PersonDAO {
  constructor(db) {
    this.db = db;
  }

  async createPerson(firstName, lastName, email) {
    const [id] = await this.db('person')
      .insert({ first_name: firstName, last_name: lastName, email })
      .returning('id');
    return id;
  }
}

module.exports = PersonDAO;

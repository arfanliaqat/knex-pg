const PersonDAO = require('./person');
const sinon = require('sinon');
const { expect } = require('chai');

describe('PersonDAO', () => {
  it('should create person', async () => {
    const returnStub = sinon.stub().returns([10]);
    const insertStub = sinon.stub().returns({ returning: returnStub });
    const db = sinon.stub().returns({ insert: insertStub });
    const dao = new PersonDAO(db);
    const data = ['John', 'Smith', 'john@example.com'];
    const result = await dao.createPerson(data[0], data[1], data[2]);
    expect(
      insertStub.calledWith({
        first_name: data[0],
        last_name: data[1],
        email: data[2],
      })
    ).to.be.true;
    expect(result).to.be.equal(10);
  });
});

import find from 'lodash';

const persons = [
  { id: 1, name: 'Victor', surname: 'Sandoval', email: 'victor@weriklandia.com', phone: '987654321' },
  { id: 2, name: 'Rocio', surname: 'Caro', email: 'rocio@weriklandia.com', phone: '987123654' },
];

const resolveFunctions = {
  Query: {
    persons() {
      return persons;
    },
    person(_, { id }) {
      return find(persons, { id });
    },
  },
};

export default resolveFunctions;

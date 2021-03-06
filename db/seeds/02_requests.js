
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        // {id: 1, user_id: 1, request_status: 'pending', description: ''},
        // {id: 2, user_id: 2, request_status: 'pending', description: ''},
        // {id: 3, user_id: 3, request_status: 'pending', description: ''},
        // {id: 4, user_id: 4, request_status: 'pending', description: ''},
        // {id: 5, user_id: 5, request_status: 'pending', description: ''}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('requests_id_seq', (SELECT MAX(id) FROM requests));`
      )
    })
};

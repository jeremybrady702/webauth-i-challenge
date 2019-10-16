
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'jeremy', password: 'password'},
        {username: 'Josh', password: "123456"},
        {username: 'Blair', password: "ablkjd"}
      ]);
    });
};

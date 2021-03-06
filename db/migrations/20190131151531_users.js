const TABLE_NAME = 'users'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments('id')
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.string('firstname')
    table.string('lastname')
    table.string('email')
    table.integer('age')
    table.string('street')
    table.string('city')
    table.integer('zip')
    table.string('state')
    table.string('country')
    table.bigInteger('phone')
    table.string('description')
    table.string('tagline')
    table.string('image')
    table.string('skill')
    table.string('github')
    table.string('linkedin')
    table.string('website')
    table.string('twitter')
    table.string('facebook')
    table.string('google_hangout')
    table.string('skype')
    table.string('paypal')
    table.string('billing_link')
    table.string('school')
    table.string('org')
    table.string('company')
    table.string('repl')
    table.string('codepen')
    table.string('codewars')
    table.string('queue_status')
    table.string('online')



    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)  
};

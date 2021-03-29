# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.destroy_all

puts "Creating todos..."

todo1 = Todo.create!(title: 'Buy milk', body: 'whole milk', done: false)
todo2 = Todo.create!(title: 'Return milk', body: 'taste bad with low fat', done: true)
todo3 = Todo.create!(title: 'Study react', body: 'react-redux text', done: false)

puts "Complete."
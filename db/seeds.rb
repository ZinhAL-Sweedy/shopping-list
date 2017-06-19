# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Product.destroy_all
Category.destroy_all
ShoppingList.destroy_all

u1 = User.create name:'user1', email 'test1@email.com', password: 'chicken'
u2 = User.create name:'user2', email 'test2@email.com', password: 'chicken'
u3 = User.create name:'user3', email 'test3@email.com', password: 'chicken'
u4 = User.create name:'user4', email 'test4@email.com', password: 'chicken'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all


ShoppingListItem.destroy_all

u1 = User.create name:'user1', email: 'test1@email.com', password: 'chicken'
u2 = User.create name:'user2', email: 'test2@email.com', password: 'chicken'
u3 = User.create name:'user3', email: 'test3@email.com', password: 'chicken'
u4 = User.create name:'user4', email: 'test4@email.com', password: 'chicken'
u5 = User.create name:'user5', email: 'test5@email.com', password: 'chicken'
u6 = User.create name:'user6', email: 'test6@email.com', password: 'chicken'



Product.destroy_all
p1 = Product.create name: 'product1', number: 1, price: 100
p2 = Product.create name: 'product2', number: 2, price: 200
p3 = Product.create name: 'product3', number: 3, price: 300
p4 = Product.create name: 'product4', number: 4, price: 400
p5 = Product.create name: 'product5', number: 5, price: 500
p6 = Product.create name: 'product6', number: 6, price: 600

Category.destroy_all
c1 = Category.create name:'category1'
c2 = Category.create name:'category2'
c3 = Category.create name:'category3'
c4 = Category.create name:'category4'
c5 = Category.create name:'category5'
c6 = Category.create name:'category6'

sl1 = ShoppingListItem.create product: p1, quantity: 1, user:u1
sl2 = ShoppingListItem.create product: p2, quantity: 2, user:u2
sl3 = ShoppingListItem.create product: p3, quantity: 3, user:u3
sl4 = ShoppingListItem.create product: p4, quantity: 4, user:u4
sl5 = ShoppingListItem.create product: p5, quantity: 5, user:u5
sl6 = ShoppingListItem.create product: p6, quantity: 6, user:u6
sl7 = ShoppingListItem.create product: p1, quantity: 7, user:u1
sl8 = ShoppingListItem.create product: p2, quantity: 8, user:u2


u1.shopping_list_items << sl1 << sl7 << sl6
u2.shopping_list_items << sl2 << sl8 << sl5
u3.shopping_list_items << sl3 << sl4

#
# sl4 << u4
# sl5 << u5
# sl6 << u6


p1.categories << c1 << c2
p2.categories << c2
p3.categories << c3
c1.products << p2 << p3
c4.products << p4
c5.products << p5
c6.products << p6

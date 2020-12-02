# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Comment.destroy_all
Score.destroy_all
User.destroy_all


@test = User.create!(username:'test', email: 'test@email.com', password:'123456')
@kale = User.create!(username:'kale', email: 'kale@email.com', password:'123456')
puts "#{User.count} users created"

@score1 = Score.create!(score: '50', user: @test)
@score2 = Score.create!(score: '60', user: @kale)
puts "#{Score.count} scores created"

@comment1 = Comment.create!(content: 'Test comment!', user: @test, score: @score1)
@comment2 = Comment.create!(content: 'Another test comment!', user: @kale, score: @score1)
@comment3 = Comment.create!(content: 'Test comment Again!', user: @test, score: @score2)
puts "#{Comment.count} comments created"

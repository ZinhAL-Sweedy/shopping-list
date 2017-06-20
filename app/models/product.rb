# == Schema Information
#
# Table name: products
#
#  id         :integer          not null, primary key
#  name       :string
#  number     :integer
#  price      :float
#  image      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Product < ApplicationRecord
  has_many :shopping_list_items
  has_and_belongs_to_many :categories
end

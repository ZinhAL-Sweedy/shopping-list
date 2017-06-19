# == Schema Information
#
# Table name: products
#
#  id         :integer          not null, primary key
#  name       :string
#  number     :integer
#  categoryId :integer
#  price      :float
#  image      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Product < ApplicationRecord
end

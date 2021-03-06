# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string
#  email           :string
#  password_digest :string
#  shoppingList_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  admin           :boolean          default(FALSE)
#

class User < ApplicationRecord
  has_secure_password
  has_many :shopping_list_items
  validates :email, presence: true, uniqueness: true, length: {minimum: 5}
  validates :name, presence: true
end

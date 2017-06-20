# == Schema Information
#
# Table name: shopping_list_items
#
#  id         :integer          not null, primary key
#  product_id :integer
#  quantity   :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShoppingListItem < ApplicationRecord
  belongs_to :product
  belongs_to :user
end

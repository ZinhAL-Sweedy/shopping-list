# == Schema Information
#
# Table name: shoppinglists
#
#  id         :integer          not null, primary key
#  product_id :integer
#  quantity   :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shoppinglist < ApplicationRecord
end

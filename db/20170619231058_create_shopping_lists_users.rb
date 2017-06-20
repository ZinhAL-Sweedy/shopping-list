class CreateShoppingListsUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :shopping_lists_users do |t|
      t.integer :shoppingList_id
      t.integer :user_id
    end
  end
end

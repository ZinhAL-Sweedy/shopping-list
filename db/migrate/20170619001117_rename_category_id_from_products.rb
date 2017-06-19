class RenameCategoryIdFromProducts < ActiveRecord::Migration[5.0]
  def change
    change_table :products do |t|
      t.rename :categoryId, :category_id
    # rename_column  :products, categoryId:, :category_id
  end
end
end

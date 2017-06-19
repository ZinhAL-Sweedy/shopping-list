class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :number
      t.integer :categoryId
      t.float :price
      t.string :image

      t.timestamps
    end
  end
end

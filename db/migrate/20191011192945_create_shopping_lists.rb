class CreateShoppingLists < ActiveRecord::Migration[6.0]
  def change
    create_table :shopping_lists do |t|
      t.references :products, null: false, foreign_key: true
      t.string :user
      t.string :listName
      t.integer :budget

      t.timestamps
    end
  end
end

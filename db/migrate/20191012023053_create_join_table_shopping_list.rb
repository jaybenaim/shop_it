class CreateJoinTableShoppingList < ActiveRecord::Migration[6.0]
  def change
    create_join_table :lists, :products do |t|
      t.integer [:list_id, :product_id]
      t.integer [:product_id, :list_id]
    end
  end
end

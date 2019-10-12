class CreateJoinTableShoppingListProduct < ActiveRecord::Migration[6.0]
  def change
    create_join_table :shopping_lists, :products do |t|
      # t.index [:shopping_list_id, :product_id]
      # t.index [:product_id, :shopping_list_id]
    end
  end
end

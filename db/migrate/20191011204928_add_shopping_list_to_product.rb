class AddShoppingListToProduct < ActiveRecord::Migration[6.0]
  def change
    add_reference :products, :shopping_lists, foreign_key: true 
   end
end

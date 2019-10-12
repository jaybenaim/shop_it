class AddProductsToShoppingList < ActiveRecord::Migration[6.0]
  def change
    change_column :shopping_lists, :products_id, :integer
    
   
   end
end

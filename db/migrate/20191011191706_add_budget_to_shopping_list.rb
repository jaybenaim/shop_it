class AddBudgetToShoppingList < ActiveRecord::Migration[6.0]
  def change
    add_column :shopping_lists, :budget, :integer
  end
end

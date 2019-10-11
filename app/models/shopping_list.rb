class ShoppingList < ApplicationRecord
  belongs_to :products, optional: true 

end

class ShoppingList < ApplicationRecord
  has_many :products
  has_many :lists
end

class List < ApplicationRecord
    has_many :products, through: :shopping_lists
  
end

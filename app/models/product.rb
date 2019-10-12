class Product < ApplicationRecord
  belongs_to :category
  has_many :lists, :through => :shopping_lists

end

class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :name
      t.belongs_to :aisle, index: { unique: true }, foreign_key: true
      
      t.timestamps
    end
  end
end

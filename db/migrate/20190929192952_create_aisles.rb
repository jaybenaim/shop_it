class CreateAisles < ActiveRecord::Migration[6.0]
  def change
    create_table :aisles do |t|
      t.integer :number
      t.belongs_to :store, index: { unique: true }, foreign_key: true
      
      t.timestamps
    end
  end
end

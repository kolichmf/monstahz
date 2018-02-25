class CreateSprites < ActiveRecord::Migration[5.1]
  def change
    create_table :sprites do |t|
      t.string :class_names
      t.integer :tileset_id
      t.boolean :walkable
      t.boolean :potal
      t.boolean :background
      t.integer :x
      t.integer :y

      t.timestamps
    end
  end
end

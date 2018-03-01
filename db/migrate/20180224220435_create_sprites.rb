class CreateSprites < ActiveRecord::Migration[5.1]
  def change
    create_table :sprites do |t|
      t.string :class_names
      t.integer :tileset_id
      t.boolean :walkable
      t.boolean :portal
      t.boolean :background
      t.boolean :walk_under
      t.integer :x
      t.integer :y

      t.timestamps
    end
  end
end

class CreateTilesets < ActiveRecord::Migration[5.1]
  def change
    create_table :tilesets do |t|
      t.attachment :png
      t.integer :sprite_sheet_id
      t.integer :sprite_count_x
      t.integer :sprite_count_y

      t.timestamps
    end
  end
end

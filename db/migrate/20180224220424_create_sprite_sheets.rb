class CreateSpriteSheets < ActiveRecord::Migration[5.1]
  def change
    create_table :sprite_sheets do |t|
      t.string :name

      t.timestamps
    end
  end
end

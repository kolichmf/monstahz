class CreateSpriteTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :sprite_types do |t|
      t.string :map
      t.boolean :walkable, default: false
      t.boolean :object, default: false
      t.boolean :portal, default: false
      t.boolean :background, default: false

      t.timestamps
    end
  end
end

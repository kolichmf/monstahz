class SpriteSheet < ApplicationRecord
  has_many :tilesets

  accepts_nested_attributes_for :tilesets
end

class SpriteType < ApplicationRecord
  validates :map, presence: true, uniqueness: true
end

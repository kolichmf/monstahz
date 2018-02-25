class Tileset < ApplicationRecord
  has_attached_file :png
  validates_attachment_content_type :png, content_type: 'image/png'

  belongs_to :sprite_sheet
  has_many :sprites

  accepts_nested_attributes_for :sprites
end

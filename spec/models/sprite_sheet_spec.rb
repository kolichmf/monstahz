require 'rails_helper'

RSpec.describe SpriteSheet, type: :model do
  it { should have_many :tilesets }
end

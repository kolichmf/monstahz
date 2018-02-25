require 'rails_helper'

RSpec.describe Tileset, type: :model do
  it { should belong_to :sprite_sheet }
  it { should have_many :sprites }
end

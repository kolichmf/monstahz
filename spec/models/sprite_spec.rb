require 'rails_helper'

RSpec.describe Sprite, type: :model do
  it { should belong_to :tileset }
end

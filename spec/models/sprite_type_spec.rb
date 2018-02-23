require 'rails_helper'

describe SpriteType do
  describe 'validations' do
    it { should validate_presence_of :map }
    it { should validate_uniqueness_of :map }
  end
end
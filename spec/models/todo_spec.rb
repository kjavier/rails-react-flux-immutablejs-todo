require 'rails_helper'

RSpec.describe Todo, type: :model do
  it 'is invalid if blank' do
    expect(build(:todo, name: nil)).not_to be_valid
  end

  it 'is invalid if less than 2 characters' do
    expect(build(:todo, name: 'a')).not_to be_valid
  end

  it 'is valid if more than 2 characters' do
    expect(build(:todo)).to be_valid
  end
end

require 'faker'

FactoryGirl.define do
  factory :todo do |f|
    f.name { Faker::Lorem.sentences }
  end
end

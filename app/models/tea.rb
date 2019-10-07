class Tea < ApplicationRecord
  attr_accessor :liked
  attribute :liked
  has_many :likes
end
class Tea < ApplicationRecord
  attr_accessor :liked
  has_many :likes
end
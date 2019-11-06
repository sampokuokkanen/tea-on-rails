class Like < ApplicationRecord
  belongs_to :user
  belongs_to :tea, counter_cache: true
end

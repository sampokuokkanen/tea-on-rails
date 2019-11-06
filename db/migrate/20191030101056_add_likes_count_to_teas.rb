class AddLikesCountToTeas < ActiveRecord::Migration[6.0]
  def change
    add_column :teas, :likes_count, :integer
  end
end

class CreateTeas < ActiveRecord::Migration[6.0]
  def change
    create_table :teas do |t|
      t.string :name
      t.text :description
      t.json :origin

      t.timestamps
    end
  end
end

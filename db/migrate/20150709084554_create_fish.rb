class CreateFish < ActiveRecord::Migration
  def change
    create_table :fish do |t|
      t.string :Seafood_display_name
      t.string :MBA_Rank
      t.string :Omega_Level
      t.string :Mercury_Rank

      t.timestamps null: false
    end
  end
end

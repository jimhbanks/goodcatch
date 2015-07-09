class AddMercuryPpmToFish < ActiveRecord::Migration
  def change
    add_column :fish, :Mercury_PPM, :string
  end
end

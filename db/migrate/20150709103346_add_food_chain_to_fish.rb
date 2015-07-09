class AddFoodChainToFish < ActiveRecord::Migration
  def change
    add_column :fish, :Food_Chain, :integer
  end
end

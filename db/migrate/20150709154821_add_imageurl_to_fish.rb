class AddImageurlToFish < ActiveRecord::Migration
  def change
    add_column :fish, :_imageurl, :string
  end
end

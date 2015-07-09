# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
# #
# # Examples:
# #
# #   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
# #   Mayor.create(name: 'Emanuel', city: cities.first)

Fish.destroy_all

JSON.parse(open("#{Rails.root}/db/data.json").read).each do |stuff|

Fish.create(Seafood_display_name: stuff['Seafood_Item'], Mercury_Rank: stuff['Mercury_rank'], Omega_Level: stuff['Omega_Level'], Mercury_PPM: stuff['Mercury_PPM'], MBA_Rank: stuff['MBA_Rank'], Food_Chain: stuff['Food_Chain'])
end

# test = Nori.new

# Fish.create(Seafood_display_name: stuff['Seafood_Item'], Mercury_Rank: stuff['Mercury_rank'], Omega_Level: stuff['Omega_Level'], Mercury_PPM: stuff['Mercury_PPM'], MBA_Rank: stuff['MBA_Rank'], Food_Chain: stuff['Food_Chain'])
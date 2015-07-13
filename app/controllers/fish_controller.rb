class FishController < ApplicationController

  def index
    @fishname = [] 
    @mercuryrank = []
    @omegalevel = [] 
    @foodchain = [] 
    @mbarank = [] 
    @mercuryppm = []
    @sustainabiltytext = [] 

    JSON.parse(open("#{Rails.root}/db/data.json").read).each do |stuff|
      @fishname << stuff['Seafood_display_name']
    end
  end

  def fish_data
    fish = []
    JSON.parse(open("#{Rails.root}/db/data.json").read).each do |stuff|
      if stuff["Seafood_display_name"] == params[:fish]
        fish << stuff
      end
    end
    render :json => fish
  end
end

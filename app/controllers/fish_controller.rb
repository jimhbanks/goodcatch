class FishController < ApplicationController

def index
  @fishes = Fish.all
end

end

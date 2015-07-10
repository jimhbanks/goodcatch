class DatasController < ApplicationController

  @@data = File.read("db/data.json")

  def index
    render :json => @@data
  end

end


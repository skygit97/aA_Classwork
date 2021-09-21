class Api::PokemonController < ApplicationController
  def index 
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
    if @pokemon 
      render :show 
    else  
      render json: ["Pokemon does not exist."], status: 404
    end
  end
end

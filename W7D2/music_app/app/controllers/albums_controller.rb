class AlbumsController < ApplicationController
  def create 
    @album = Album.new(album_params)

    if @album.save 
      redirect_to album_url(@album)
    else  
      # redirect_to 
    end
  end

  def edit 
    @album = Album.find_by(id: params[:id])
    render :edit
  end

  def show
    @album = Album.find_by(id: params[:id])
    render :show 
  end

  def update 

  end

  def destroy

  end

  private 

  def album_params
    params.require(:album).permit(:band_id, :;ive, :name, :year)
  end
end




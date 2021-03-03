class CatsControlller < ApplicationController

  def index
    @cat = Cat.all 
    render :index
  end

  def show
    @cat = Cat.find_by(params[:id])
    render :show
  end

  def new
    @cat = Cat.find_by_or_create_by(params[:id])

  end

  def created_at

  end

  def edit 

  end
  
  def update 

  end

  private

  def cat_params
    params.require(:cat).permit(:age, :birth_date, :color, :description, :name, :sex)
  end
end
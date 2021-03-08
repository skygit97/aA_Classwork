class CatRentalRequestsController < ApplicationController
  def new
    @rental_request = CatRentalRequest.new
    render :new
  end

  def create 
    @rental_request = CatRentalRequest.new(rental_params)

    if @rental_request.save 
      redirect_to cat_url(@rental_request.cat)
    else
      flash.now[:errors] = @rental_request.errors.full_messages 
      render :new
    end
  end

  private 

  def rental_params 
    params.require(:cat_rental_request).permit(:cat_id, :end_date, :start_date, :status)
  end
end

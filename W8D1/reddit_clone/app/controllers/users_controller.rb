class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      # redirect_to new_sesesion_url 
    else  
      flash.now[:errors] = @user.errors.full_messaages
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

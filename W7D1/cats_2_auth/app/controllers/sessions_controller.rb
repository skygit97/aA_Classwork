class SessionsController < ApplicationController
  def new
    render :new
  end

  def create 
    @user = User.find_by_credentials(params[:user][:usermame], params[:user][:username])

    if @user
      login!(@user)
      redirect_to cats_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def destroy 
    logout!
    redirect_to new_session_url
  end
end

class ApplicationController < ActionController::Base
  helper_method :current_user
  
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end
  
  def login!(user)
    session[:session_token] = user.reset_session_token!
  end
  
  def logout!
    current_user.reset_session_token! if current_user
    session[:session_token] = nil
    @current_user = nil
  end
  
  def logged_in?
    !current_user.nil?
  end
  
  def require_logged_in
    redirect_to new_session_url if !logged_in?
  end
end

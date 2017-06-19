class SeesionController < ApplicationController

  def new
  end

  def create
    user = User.find_by email: params[:email]
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path
    else
      flash[:error] = "Invalid email and/or password"
      redirect_to login_path
  end

  def edit
  end

  def update
  end

  def shw
  end

  def index
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end

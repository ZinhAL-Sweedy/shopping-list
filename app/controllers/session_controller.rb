class SessionController < ApplicationController

  def new
  end

  def create
    user = User.find_by email: params[:email]

    if user.present? && user.authenticate( params[:password] )
      # successful login
      session[:user_id] = user.id

    if user.admin?
      redirect_to users_path
    else
      redirect_to root_path
    end

    else
      # bad credentials
      flash[:error] = "Invalid email and/or password"
      redirect_to login_path
    end
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
    session[:user_id] = nil   # unset/remove session
    redirect_to root_path
  end
end

class UsersController < ApplicationController
  before_action :get_user, only: [:show, :edit,:update]
  before_action :check_if_logged_in, only: [ :shoppingList_create ]
  before_action :check_if_admin, only: [ :index ]

  def get_user
    @user = User.find params["id"]
  end
  def new
    @user = User.new
  end

  def create
    @user = User.create user_params
    if @user.id.present?
      session[:user_id] = @user.id
      redirect_to user_path(@user.id)
    else
      render :new
    end
  end

  def index
    @users = User.all
  end
  def edit
    redirect_to root_path unless @current_user == @user
  end

  def update
    @user = @current_user
    @user.update user_params
  redirect_to user_path( params["id"])
  end

  def show
  end


  def destroy
  end
  def user_params
    params.require(:user).params(:email, :name, :password, :password_confirmation)
  end


end
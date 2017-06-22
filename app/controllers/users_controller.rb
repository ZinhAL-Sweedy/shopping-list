class UsersController < ApplicationController
  before_action :get_user, only: [:show, :edit,:update]
  before_action :check_if_admin, only: [ :index ]
  before_action :check_if_logged_in, only: [ :shoppingList_create ]

  def get_user
    @user = User.find params["id"]
  end
  def new
    @user = User.new
  end

  def create
    @user = User.create user_params
    if @user.id.present?
      session[:user_id] = @user.id  # perform login (set session)
      redirect_to user_path(@user.id)   # /users/17
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
  redirect_to user_path( params["id"] )
  end

  def show
  end


  def destroy
  end
  def user_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation)
  end


end

# class UsersController < ApplicationController
#   def new
#   end
#
#   def create
#   end
#
#   def edit
#   end
#
#   def update
#   end
#
#   def index
#   end
#
#   def show
#   end
#
#   def destroy
#   end
# end

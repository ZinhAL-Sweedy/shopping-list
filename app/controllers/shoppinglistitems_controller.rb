class ShoppinglistitemsController < ApplicationController

  before_action :check_if_logged_in


  def update_quantities

    # raise 'hell'
    params[:item].each do |key, val|

      # puts "="*50
      # puts "id: #{key}, new qty: #{val}"

      s = ShoppingListItem.where(user: @current_user, product_id: key)
      s.update quantity: val
      
      # p s
      # puts s.product_id, s.quantity
    end

    redirect_to shoppinglistitems_path
  end

  def new
    # @product = Product.new
    @categories = Category.all
    @users = User.all
    @shoppinglistitems = ShoppingListItem.all
  end

  def create
    # # @shoppinglistitem = ShoppingListItem.new shoppinglistitem_params
    # @shoppinglistitem = Product.new product_params
    # # need to find  what product id  and decrease the number of them
    #
    # raise 'hell'
    s = ShoppingListItem.find_by(product_id: params[:product_id], user: @current_user )
    if s.present?
      # raise 'hell'
       s.update quantity: params[:quantity].to_i + s.quantity
      # update_quantities
    else
      ShoppingListItem.create product_id: params[:product_id], quantity: params[:quantity], user:
    @current_user
    end
    redirect_to shoppinglistitems_path
  end

  def edit
    @shoppinglistitem = ShoppingListItem.find params["id"]
    @product = Product.new
    @categories = Category.all
    @users = User.all
  end

  def update
    @shoppinglistitem = ShoppingListItem.find params["id"]
    @shoppinglistitem.update shoppinglistitem_params
    s = ShoppingListItem.find_by(product_id: params[:product_id], user: @current_user )
    if s.present?
      # raise 'hell'
      s.update quantity: params[:quantity].to_i + s.quantity
    else
      ShoppingListItem.create product_id: params[:product_id], quantity: params[:quantity], user:
    @current_user
    end
    redirect_to shoppinglistitems_path

    redirect_to "shoppinglistitem_path"
  end
  def index
    @shoppinglistitems = ShoppingListItem.where user: @current_user

    # puts "&"*50, @shoppinglistitems.pluck(:product_id)

  end

  def show
    @shoppinglistitem = ShoppingListItem.find params["id"]
  end

  def destroy

    ShoppingListItem.find(params["id"]).destroy
    redirect_to shoppinglistitems_path
  end

  private
  def shoppinglistitem_params
    params.require( :shoppinglistitem).permit(:product_id, :quantity, :user_id)
  end

end

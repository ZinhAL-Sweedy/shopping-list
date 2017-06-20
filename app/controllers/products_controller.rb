class ProductsController < ApplicationController
  def new
    @product = Product.new
    @category = Category.all
    # @categories = Category.all
  end

  def create
    # product = Product.find params["id"]
    # product = Product.create({
    # name: params["name"],
    # number: params["number"],
    # price: params["price"],
    # image: params["image"]
    # })
    # raise
    @product = Product.new product_params
    if params[:file].present?
      #perform upload to cloudinaray
      req = Cloudinary::Uploader.upload params[:file]
      @product.image = req['public_id']
    end
         # cloudinaryid public var and ny one use thie url can use it replace every image with this code
        @product.save
    redirect_to "/products/#{ @product.id }"
  end

  def edit
    @product = Product.find params["id"]
    @categories = Category.all
  end

  def update
      product = Product.find params["id"]
      # Product.update product_params
      product.update product_params
      # ({
      #   name: params["name"],
      #   number: params["number"],
      #   price: params["price"]
      # })
      redirect_to "/products/#{ product.id }"
  end

  def show
    @product = Product.find params["id"]
  end

  def index
    @products = Product.all
  end

  def destroy
    Product.find( params["id"]).destroy
    redirect_to "/products"
  end

  private
  def product_params
    params.require(:product).permit(:name, :number, :price, :image)
  end
end

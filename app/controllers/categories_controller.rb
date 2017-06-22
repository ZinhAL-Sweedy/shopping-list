class CategoriesController < ApplicationController
  def new
    @category = Category.new
    @products = Product.all
    # @product = Product.new

  end

  def create

    @category = Category.new category_params
    # create({
    #   name: params["name"]
    #   })
      redirect_to "/categories/#{ @category.id }"
  end

  def edit
    @category = Category.find params["id"]
    @products = Product.all
  end

  def update
    @category = Category.find params["id"]
    @category.update category_params
    # category.update({
    #   name: params["name"]
    #   })
    # @category.products << product_ids
    redirect_to "/categories/#{ @category.id }"
      # redirect_to category_path(category)
      # /category/7" or similar
      # redirect_to "/products/#{ product.id }" // or old way

  end

  def show
    @category = Category.find params["id"]
    @products = Product.all
  end

  def index
    @categories = Category.all
  end

  def destroy

    Category.find( params["id"] ).destroy
    redirect_to "/categories"

    # redirect_to category_path
  end
  private
  def category_params
    params.require(:category).permit(:name, product_ids:[])
  end
end

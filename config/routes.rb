Rails.application.routes.draw do

  resources :shoppinglistitems

  post "/shopping_list_quantities" => 'shoppinglistitems#update_quantities'

  root to: "products#index"
  # root to: ""

  resources :users

  get    '/login' => 'session#new'
  post   '/login' => 'session#create'
  delete '/login' => 'session#destroy'


  #product
  #create

  resources :products
  #
  # get "/products/new"  => "products#new"
  # get "/products"  => "products#create"
  # # get "/products/edit"  =>
  # #read
  # get "/products"  => "products#index"
  # get "/products/:id"  =>"products#show"
  # # update
  # get "/products/id/edit"  => "products#edit"
  # # , as: 'product'
  # patch "/products/id"  => "products#update"
  # #delete
  # delete "/products/:id"  => "products#destroy"


  resources :categories
  # #category
  #   #create
  #   get "/categories/new"  => "categories#new"
  #   post "/categories" => "categories#create"
  #   #read
  #   get "/categories" => "categories#index"
  #   get "/categories/:id"  => "categories#show"
  #   #update
  #   get "/categories/:id/edit" => "categories#edit"
  #   # , as: 'categories'
  #   #post
  #   patch "/categories/:id" => "categories#update"

    # get "/categories/update"

#     #delete
#     delete "/categories/:id" => "categories#destroy"
#     ######################################
#     #shoppinglist


  # resources :shoppinglists
  #   shoppinglists GET    /shoppinglists(.:format)          shoppinglists#index
  #                   POST   /shoppinglists(.:format)          shoppinglists#create
  #  new_shoppinglist GET    /shoppinglists/new(.:format)      shoppinglists#new
  # edit_shoppinglist GET    /shoppinglists/:id/edit(.:format) shoppinglists#edit
  #      shoppinglist GET    /shoppinglists/:id(.:format)      shoppinglists#show
  #                   PATCH  /shoppinglists/:id(.:format)      shoppinglists#update
  #                   PUT    /shoppinglists/:id(.:format)      shoppinglists#update
  #                   DELETE /shoppinglists/:id(.:format)      shoppinglists#destroy

end

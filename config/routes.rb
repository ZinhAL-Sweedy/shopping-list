Rails.application.routes.draw do
#

root to: "users#new"
get '/login' => 'session#new'
post "/login" => 'session#create'
delete 'login' => 'session#destroy'

resources :users

# get 'seesion/new'
#
#   get 'seesion/create'
#
#   get 'seesion/edit'
#
#   get 'seesion/update'
#
#   get 'seesion/shw'
#
#   get 'seesion/index'
#
#   get 'seesion/destroy'
#
#   get 'shopping_list/new'
#
#   get 'shopping_list/create'
#
#   get 'shopping_list/edit'
#
#   get 'shopping_list/update'
#
#   get 'shopping_list/show'
#
#   get 'shopping_list/index'
#
#   get 'shopping_list/destroy'
#
#   get 'categories/new'
#
#   get 'categories/create'
#
#   get 'categories/edit'
#
#   get 'categories/update'
#
#   get 'categories/show'
#
#   get 'categories/index'
#
#   get 'categories/destroy'
#
#   get 'users/new'
#
#   get 'users/create'
#
#   get 'users/edit'
#
#   get 'users/update'
#
#   get 'users/show'
#
#   get 'users/index'
#
#   get 'users/destroy'
#
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

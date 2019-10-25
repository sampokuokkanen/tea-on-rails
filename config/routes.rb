Rails.application.routes.draw do
  devise_for :users
  devise_for :admins
  mount RailsAdmin::Engine => '/tea_master', as: 'rails_admin'
  get 'teas/index'
  get 'teas/create'
  post '/teas', to: 'teas#add_to_favorites' 
  get '/teas/favorites', to: 'teas#favorites'
  resources :teas
  root to: "page#index"
  post 'users', to: 'users#current_user_exists?'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

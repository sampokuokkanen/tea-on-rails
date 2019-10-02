Rails.application.routes.draw do
  get 'teas/index'
  get 'teas/create'
  devise_for :users
  resources :users
  post '/teas', to: 'teas#add_to_favorites' 
  resources :teas
  root to: "page#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

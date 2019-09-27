Rails.application.routes.draw do
  get 'teas/index'
  get 'teas/create'
  devise_for :users
  resources :users
  resources :teas

  root to: "page#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

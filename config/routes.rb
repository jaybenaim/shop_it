Rails.application.routes.draw do
  devise_for :users
  resources :shopping_lists
  get 'home/index'
  resources :products
  resources :categories
  resources :aisles
  resources :stores
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

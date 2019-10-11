Rails.application.routes.draw do

  resources :shopping_lists, defaults: {format:'json'}
  devise_for :users
  get 'home/index'
  resources :products, defaults: {format:'json'}
  resources :categories, defaults: {format:'json'}
  resources :aisles, defaults: {format:'json'}
  resources :stores, defaults: {format:'json'}
  root 'home#index'
  get '*path', to: 'home#index'
 
  namespace :api, defaults: { format: 'json' } do
    resources :shopping_lists, only: [:index, :create]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

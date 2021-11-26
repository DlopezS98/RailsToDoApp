Rails.application.routes.draw do
  devise_for :users
  get '/notes/dashboard', to: 'notes#dashboard'
  resources :notes
  root 'notes#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

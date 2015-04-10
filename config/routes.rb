Rails.application.routes.draw do
  root 'todos#index'

  resources :todos, only: [:index, :create, :update, :delete]
end

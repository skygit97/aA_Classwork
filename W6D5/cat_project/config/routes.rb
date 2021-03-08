Rails.application.routes.draw do
  get 'cat_rental_requests/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :cats, only: [:index, :show, :create, :new, :edit, :update]

  resources :cat_rental_requests, only: [:new, :create, :edit]
end

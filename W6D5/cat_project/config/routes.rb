Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :cats, except: :destroy

  # get '/cats', to: 'cats#index'

  # get '/cats/:id', to: 'cats#show'
end

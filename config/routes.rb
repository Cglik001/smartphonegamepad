Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :games, only: :show do
    resources :button_interactions, only: :create
  end

  post '/games/:id' => 'button_interactions#update'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

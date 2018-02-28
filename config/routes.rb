Rails.application.routes.draw do
  root to: 'application#home'

  namespace :admin do
    resources :tilesets
  end
end

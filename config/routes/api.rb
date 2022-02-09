# frozen_string_literal: true

namespace :api, defaults: { format: :json } do
  namespace :v1 do
    devise_scope :user do
      post "login" => "sessions#create", as: "login"
      delete "logout" => "sessions#destroy", as: "logout"
    end

    resources :users, only: [:show, :create, :update, :destroy], constraints: { id: /.*/ }
    resources :notes, only: [:index, :create, :update, :destroy] do
      collection do
        post "bulk_delete"
      end
    end

    resources :cypress_runs, only: [:create]
  end
end

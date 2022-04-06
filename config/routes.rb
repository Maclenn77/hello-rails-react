Rails.application.routes.draw do
  get '*page', to: 'static#index', constraints: ->(req) do 
    !req.xhr? && req.format.html?
  end
  root 'static#index'
  namespace :v1, defaults: { format: 'json' } do
    get 'greetings', to: 'greetings#index'
  end
end

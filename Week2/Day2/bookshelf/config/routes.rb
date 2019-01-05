Rails.application.routes.draw do
  # setting the default to json will display errors in json instead of html, which is more useful to us
  resources :books, defaults: { format: :json }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

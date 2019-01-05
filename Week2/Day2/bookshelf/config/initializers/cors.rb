# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

# Cors is a security gem to allow the servers to communicate with eachother

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # NOTE: You will need the rails server open at the same time as the JS server
    origins '127.0.0.1:5500'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end


require 'sinatra'
require 'json'

configure { set :server, :puma }

set :root, 'lib/app'

get '/' do
  render :html, :index
end

get '/api/hello' do
  content_type :json
  {
    data: 'fff'
  }.to_json
end


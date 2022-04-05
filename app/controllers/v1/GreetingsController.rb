class V1::GreetingsController < ApplicationController
  def index
    render json: {
        :greetings => 'A greeting'
    }.to_json
  end
end
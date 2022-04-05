class V1::GreetingsController < ApplicationController
  def index
    render json: {
        :greetings => a_random_greeting
    }.to_json
  end

  private

  def a_random_greeting
    greetings = ['¡Hola! Bienvenidos.', '안녕하세요', 'Hello, welcome!', 'Здравствуйте!', 'こんにちは']
    greetings[rand(5)]
  end
end
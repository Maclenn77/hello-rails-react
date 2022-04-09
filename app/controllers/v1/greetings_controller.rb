class V1::GreetingsController < ApplicationController
  def index
    random = rand(5)
    render json: {
        :greeting => a_random_greeting(random),
        :language => a_random_language(random)
    }.to_json
  end

  private
  def a_random_language(i)
    languages = ['Spanish', 'Korean', 'English', 'Russian', 'Japanese']
    languages[i]
  end

  def a_random_greeting(i)
    greetings = ['¡Hola! Bienvenidos.', '안녕하세요', 'Hello, welcome!', 'Здравствуйте!', 'こんにちは']
    greetings[i]
  end
end
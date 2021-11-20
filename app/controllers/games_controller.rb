class GamesController < ApplicationController
  def show
    @game = Game.find(params[:id])
    @button_interaction = ButtonInteraction.new
  end

end

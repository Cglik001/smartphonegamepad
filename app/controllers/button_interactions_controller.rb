class ButtonInteractionsController < ApplicationController
  def create
    @game = Game.find(params[:game_id])
    @button_interaction = ButtonInteraction.new(button_interaction_params[:keypressed])
    @button_interaction.game = @game
    @button_interaction.user = current_user
    if @button_interaction.save
      GameChannel.broadcast_to(
        @game,
        render_to_string(partial: "button_interaction", locals: { button_interaction: button_interaction })
      )
      redirect_to game_path(@game)
    else
      render "games/show"
    end
  end

  def update

      @keypressed = button_interaction.keypressed
      @keypressed.user = current_user
    if @keypressed.save
        GameChannel.broadcast_to(
          @game,
          render_to_string(partial: "keypressed", locals: { button_interaction: keypressed })
        )
        redirect_to game_path(@game)
      else
        render "games/show"
      end



  def button_interaction_params
    params.require(:button_interaction).permit(:keypressed)
  end
end

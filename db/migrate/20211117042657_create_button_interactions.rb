class CreateButtonInteractions < ActiveRecord::Migration[6.1]
  def change
    create_table :button_interactions do |t|
      t.string :keypressed
      t.references :game, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

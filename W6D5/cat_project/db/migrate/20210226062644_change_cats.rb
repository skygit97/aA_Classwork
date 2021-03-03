class ChangeCats < ActiveRecord::Migration[5.2]
  def change
    change_column :cats, :birth_date, :date, null: false
  end
end

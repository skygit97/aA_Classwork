class AddColumnsToCats < ActiveRecord::Migration[5.2]
  def change
    add_column :cats, :color, :string, null: false
    add_column :cats, :name, :string, null: false
    add_column :cats, :sex, :string, null: false
    add_column :cats, :description, :text

    add_column :cats, :created_at, :datetime, null: false
    add_column :cats, :updated_at, :datetime, null: false
  end
end

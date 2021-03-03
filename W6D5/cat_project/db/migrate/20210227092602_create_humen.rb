class CreateHumen < ActiveRecord::Migration[5.2]
  def change
    create_table :humans do |t|

      t.timestamps
    end
  end
end

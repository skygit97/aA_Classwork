class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false 
      t.string :username, null: false
      t.string :password_digest, null: false, limit: 6

      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end

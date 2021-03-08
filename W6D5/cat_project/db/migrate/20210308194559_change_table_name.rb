class ChangeTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :cat_rentail_requests, :cat_rental_requests
  end
end

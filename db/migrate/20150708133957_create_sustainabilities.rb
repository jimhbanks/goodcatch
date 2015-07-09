class CreateSustainabilities < ActiveRecord::Migration
  def change
    create_table :sustainabilities do |t|

      t.timestamps null: false
    end
  end
end

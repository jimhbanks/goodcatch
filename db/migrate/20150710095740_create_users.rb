class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.text :bio
      t.integer :age
      t.string :sex

      t.timestamps null: false
    end
  end
end

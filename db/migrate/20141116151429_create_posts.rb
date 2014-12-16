class CreatePosts < ActiveRecord::Migration
  def change
  	# drop_table :posts
    create_table :posts do |t|
      t.string :title,              null: false, default: ""
      t.text :description, null: false, default: ""

      t.timestamps
    end
  end
end

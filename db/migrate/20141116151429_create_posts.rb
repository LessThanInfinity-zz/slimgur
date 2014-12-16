class CreatePosts < ActiveRecord::Migration
  def change
    drop_table 'posts' if ActiveRecord::Base.connection.table_exists? 'posts'
    create_table :posts do |t|
      t.string :title,              null: false, default: ""
      t.text :description, null: false, default: ""

      t.timestamps
    end
  end
end




# class CreatePosts < ActiveRecord::Migration
#   # def change
#   #   create_table :posts do |t|
#   #     t.string :title,              null: false, default: ""
#   #     t.text :description, null: false, default: ""

#   #     t.timestamps
#   #   end
#   # end

#   def up
#     create_table :posts do |t|
#       t.string :title,              null: false, default: ""
#       t.text :description, null: false, default: ""

#       t.timestamps
#     end
#   end

#   def down
#   	drop_table :posts
#   end
# end

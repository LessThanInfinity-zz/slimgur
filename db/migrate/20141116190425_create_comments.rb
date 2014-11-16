class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
    	# t.string :author_name
    	t.references :parent
    	t.text :body

      t.timestamps
    end
  end
end

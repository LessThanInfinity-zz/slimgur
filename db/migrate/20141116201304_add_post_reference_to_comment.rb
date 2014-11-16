class AddPostReferenceToComment < ActiveRecord::Migration
  def change
  	# add_column :comments, :post, :references
  	add_reference :comments, :post, index: true
  end
end

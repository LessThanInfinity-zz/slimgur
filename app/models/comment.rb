class Comment < ActiveRecord::Base
	extend ActsAsTree::TreeView

	acts_as_tree :order => 'created_at'
end

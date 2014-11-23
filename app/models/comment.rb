class Comment < ActiveRecord::Base
	extend ActsAsTree::TreeView

	acts_as_tree :order => 'created_at'
	belongs_to :post
	belongs_to :user


	def commented_by
		self.user.username
	end
end

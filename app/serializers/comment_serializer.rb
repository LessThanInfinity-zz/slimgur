class CommentSerializer < ActiveModel::Serializer
	embed :ids, include: true
	
  attributes  :id,
              :parent_id,
              :body,
              :created_at,
              :updated_at,
              :post_id,
              :user_id,
              :commented_by

  # has_one :user
  # has_one :post
  # has_one :parent

  # belongs_to :post
  # belongs_to :user
  # belongs_to :comment
  has_many :children, include: true, root: :comments
end

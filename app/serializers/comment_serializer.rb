class CommentSerializer < ActiveModel::Serializer
  attributes :id, :parent_id, :body, :created_at, :updated_at, :post_id, :user_id
end

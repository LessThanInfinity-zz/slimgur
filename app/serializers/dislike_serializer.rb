class DislikeSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :user_id, :created_at, :updated_at
end

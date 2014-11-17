class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :created_at, :updated_at, :user_id, :image_file_name, :image_content_type, :image_file_size, :image_updated_at
end

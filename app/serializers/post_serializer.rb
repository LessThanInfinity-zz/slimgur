class PostSerializer < ActiveModel::Serializer
	# embed :ids
	embed :ids, include: true
	
  attributes 	:id, 
  						:title, 
  						:description, 
  						:created_at, 
  						:updated_at, 
  						:user_id, 
  						:image_file_name, 
  						:image_content_type, 
  						:image_file_size, 
  						:image_updated_at, 
  						:image_url, 
  						:tag_list, 
  						:uploaded_by

  # has_one :user
  # belongs_to :user
  has_many :comments#, embed :ids, include: true
end

class UserSerializer < ActiveModel::Serializer
	embed :ids, include: true

  attributes 	:id, 
  						# :email, 
  						:username, 
  						:created_at, 
  						:updated_at
  has_many :posts
end

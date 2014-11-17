class Attachment < ActiveRecord::Base
  belongs_to :post

	has_attached_file :image
	# validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png, image/gif"]
	validates_attachment_content_type :image, :content_type =>
	/\Aimage\/(jpg|jpeg|pjpeg|png|x-png|gif)\z/
end

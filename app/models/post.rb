class Post < ActiveRecord::Base

	has_attached_file :image

	validates_attachment_content_type :image, :content_type =>
	/\Aimage\/(jpg|jpeg|pjpeg|png|x-png|gif)\z/

	has_many :comments
	has_many :taggings
	has_many :tags, through: :taggings

	has_many :favorite_posts
	has_many :favorited_by, through:  :favorite_posts, source: :user

	has_many :likes
	has_many :upvotes, through:  :likes, source: :user

	has_many :dislikes
	has_many :downvotes, through:  :likes, source: :user

	belongs_to :user

	def tag_list
	  self.tags.collect do |tag|
	    tag.name
	  end.join(", ")
	end

	def tag_list=(tags_string)
	  tag_names = tags_string.split(",").collect{|s| s.strip.downcase}.uniq
	  new_or_found_tags = tag_names.collect { |name| Tag.find_or_create_by(name: name) }
	  self.tags = new_or_found_tags
	end

	def uploaded_by
		self.user.username
	end

	def image_url
		self.image.url
	end

	def num_upvotes
		self.upvotes.count
	end

	def num_downvotes
		self.dislikes.count
	end

	def is_favorite
		# Placeholder. Need to put in real check
		true
	end
end

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :posts
  has_many :comments

  has_many :favorite_posts
  has_many :favorites, through: :favorite_posts, source: :post

  has_many :likes
  has_many :upvoted_on, through: :likes, source: :post

  has_many :dislikes
  has_many :downvoted_on, through: :dislikes, source: :post

end

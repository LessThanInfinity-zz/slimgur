module PostsHelper

	def post_params
    params.require(:post).permit(:title, :description, :tag_list, :image)
  end

end

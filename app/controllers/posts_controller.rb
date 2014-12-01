class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  # For some reason this is not enough for ember. Perhaps there is a better way: check more later.
  respond_to :html, :json
  # respond_to :json

  def index
    @posts = Post.all
    puts "in PostsController index. "
    puts @posts

    respond_with(@posts) do |format|
      format.html
      format.json {render json: @posts}
    end
    # respond_with(@posts)
  end

  def show
    respond_with(@post) do |format|
      format.html
      format.json {render json: @post}
    end
    # respond_with(@post)
  end

  def new
   if current_user
    @post = Post.new
    respond_with(@post) do |format|
      format.html
      format.json {render json: @post}
    end
    # respond_with(@post)
   else
     redirect_to new_user_session_path, notice: 'You are not logged in.'
   end

  end

  def edit
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = 1;
    # @post.user_id = current_user.id

    @post.save
    respond_with(@post) do |format|
      format.html
      format.json {render json: @post}
    end
    # respond_with(@post)
  end

  def update
    @post.update(post_params)
    # respond_with(@post)
    respond_with(@post) do |format|
      format.html
      format.json {render json: @post}
    end
  end

  def destroy
    @post.destroy
    # respond_with(@post)
    # This pribabyl 
    respond_with(@post) do |format|
      format.html
      format.json {render json: @post}
    end
  end

  private
    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params[:post]
      params.require(:post).permit(:title, :description, :tag_list, :image)
    end
end

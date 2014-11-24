class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @comments = Comment.all

    respond_with(@comments) do |format|
      format.html
      format.json {render json: @comments}
    end
  end

  def show
    
    respond_with(@comment) do |format|
      format.html
      format.json {render json: @comment}
    end
  end

  def new
    @comment = Comment.new
    
    respond_with(@comment) do |format|
      format.html
      format.json {render json: @comment}
    end
  end

  def edit
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    @comment.save
    
    respond_with(@comment) do |format|
      format.html
      format.json {render json: @comment}
    end
  end

  def update
    @comment.update(comment_params)
    
    respond_with(@comment) do |format|
      format.html
      format.json {render json: @comment}
    end
  end

  def destroy
    @comment.destroy
    
    # This probably needs to change. 
    respond_with(@comment) do |format|
      format.html
      format.json {render json: @comment}
    end
  end

  private
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def comment_params
      params[:comment]
    end
end

class UsersController < ApplicationController
		before_action :set_user
		respond_to :html, :json

  def show
    puts 'in show action'
    puts json: @user
    respond_with(@user) do |format|
      format.html
      format.json {render json: @user}
    end
    # respond_with(@user)
  end

  private
  def set_user
    puts 'in set_user'
    @user = User.find(params[:id])
  end

  def post_params
    params[:user]
    params.require(:user).permit(:email, :username)
  end

end
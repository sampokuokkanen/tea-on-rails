class UsersController < ApplicationController
  def index
    @users = User.all
    render component: 'Users', props: { users: @users }
  end

  def current_user_exists?
    render js: current_user.nil?
  end
end

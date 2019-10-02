class TeasController < ApplicationController
  def index
  end

  def show
    tea = Tea.find_by_id(params[:id])
    tea.liked = Like.where(user_id: current_user.id, tea_id: tea.id).exists?
    render component: 'Tea', props: { tea: tea }
  end

  def create
  end

  def add_to_favorites
    if Like.where(user_id: current_user.id, tea_id: params[:tea]).exists?
      Like.where(user_id: current_user.id, tea_id: params[:tea]).destroy_all
    else
      Like.create!(user_id: current_user.id, tea_id: params[:tea])
    end
  end
end

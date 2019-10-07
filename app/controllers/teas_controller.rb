class TeasController < ApplicationController
  def index
    teas = Tea.all
    render component: 'TeaIndex', props: { teas: teas }
  end

  def show
    tea = Tea.find_by_id(params[:id])
    tea.liked = Like.where(user_id: current_user.id, tea_id: tea.id).exists?
    render component: 'Tea', props: { tea: tea }
  end

  def create
  end

  def favorites
    teas = Tea.where(id: Like.where(user_id: current_user.id).pluck(:tea_id))
    render component: 'Favorites', props: { teas: teas }
  end

  def add_to_favorites
    if Like.find_by_user_id_and_tea_id(current_user.id, params[:tea]).blank?
      Like.where(user_id: current_user.id, tea_id: params[:tea]).destroy_all
    else
      Like.create!(user_id: current_user.id, tea_id: params[:tea])
    end
  end
end

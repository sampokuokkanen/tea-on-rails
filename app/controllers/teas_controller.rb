class TeasController < ApplicationController
  def index
    teas = check_if_liked(Tea.all)
    render component: 'TeaIndex', props: { teas: teas }
  end

  def show
    tea = check_if_liked(Tea.find_by_id(params[:id]))
    tea.liked = Like.where(user_id: current_user.id, tea_id: tea.id).exists?
    render component: 'Tea', props: { tea: tea }
  end

  def create
  end

  def favorites
    teas = check_if_liked(Tea.where(id: Like.where(user_id: current_user.id).pluck(:tea_id)))
    byebug
    render component: 'Favorites', props: { teas: teas }
  end

  def add_to_favorites
    if Like.find_by_user_id_and_tea_id(current_user.id, params[:tea]).blank?
      Like.create!(user_id: current_user.id, tea_id: params[:tea])
    else
      Like.where(user_id: current_user.id, tea_id: params[:tea]).destroy_all
    end
  end

  private
  def check_if_liked(teas)
    teas.each do |tea|
      tea.liked = Like.where(user_id: current_user.id, tea_id: tea.id).exists?
    end
  end
end
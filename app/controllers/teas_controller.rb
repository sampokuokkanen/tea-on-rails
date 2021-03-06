class TeasController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show, :add_to_favorites]
  def index
    teas = check_if_liked(Tea.all)
    render component: 'TeaIndex', props: { teas: teas }
  end

  def show
    tea = check_if_liked(Tea.find_by_id(params[:id]))
    render component: 'Tea', props: { tea: tea }
  end

  def create
  end

  def favorites
    teas = check_if_liked(Tea.where(id: Like.where(user_id: current_user.id).pluck(:tea_id)))
    render component: 'Favorites', props: { teas: teas }
  end

  def add_to_favorites
    return if current_user.nil?

    if Like.exists?(user_id: current_user.id, tea_id: params[:tea])
      tea = Like.find_by(user_id: current_user.id, tea_id: params[:tea]).destroy
    else
      tea = Like.create!(user_id: current_user.id, tea_id: params[:tea])
    end
    render json: !tea.destroyed?
  end

  private
  def check_if_liked(teas)
    return teas if current_user.nil?

    teas.each do |tea|
      tea.liked = Like.where(user_id: current_user.id, tea_id: tea.id).exists?
    end
  end
end

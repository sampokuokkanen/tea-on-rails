class PageController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
    @topcontent = Tea.find(Like.group(:tea_id, :id).order('count(tea_id) desc').limit(3).pluck(:tea_id))
    render component: 'Index', props: { topcontent: @topcontent }
  end
end
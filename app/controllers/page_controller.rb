class PageController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
    @topcontent = Tea.order(likes_count: 'desc').limit(3)
    render component: 'Index', props: { topcontent: @topcontent }
  end
end
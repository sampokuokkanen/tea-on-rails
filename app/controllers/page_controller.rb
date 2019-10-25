class PageController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
    @topcontent = User.limit(2)
    render component: 'Index', props: { topcontent: @topcontent }
  end
end
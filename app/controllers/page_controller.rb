class PageController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
    @topcontent = Tea.limit(2)
    byebug
    render component: 'Index', props: { topcontent: @topcontent }
  end
end
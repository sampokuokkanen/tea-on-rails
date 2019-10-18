class PageController < ApplicationController
  def index
    @topcontent = User.limit(2)
    render component: 'Index', props: { topcontent: @topcontent }
  end
end
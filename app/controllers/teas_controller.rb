class TeasController < ApplicationController
  def index
  end

  def show
    tea = Tea.find_by_id(params[:id])
    render component: 'Tea', props: { tea: tea }
  end

  def create
  end
end

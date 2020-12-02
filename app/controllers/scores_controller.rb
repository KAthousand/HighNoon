class ScoresController < ApplicationController
  before_action :set_score, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /scores
  def index
    @scores = Score.all

    # render json: @scores, include: [:user, :comments]
    # render json: @scores, :include => {:comments => {:include => :user}}
    render json: @scores, :include => [:user,{:comments => {:include => :user}}]
  end

  # GET /scores/1
  def show
    render json: @score, include: [:user, :comments]
  end

  # POST /scores
  def create
    @score = Score.new(score_params)
    @score.user = @current_user
    if @score.save
      render json: @score, status: :created, location: @score
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  # # PATCH/PUT /scores/1
  # def update
  #   if @score.update(score_params)
  #     render json: @score
  #   else
  #     render json: @score.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /scores/1
  def destroy
    @score.destroy
  end

  # no fucking clue what this is for? some join table thing?
  # def add_comment
  #   @comment = Comment.find(params[:comment_id])

  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_score
      @score = Score.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def score_params
      params.require(:score).permit(:score, :user_id)
    end
end

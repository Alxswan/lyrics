class LyricsController < ApplicationController
  before_action :set_lyric, only: [:show, :edit, :update, :destroy]

  # GET /lyrics
  # GET /lyrics.json
  def index
    @lyrics = Lyric.all
    require 'open-uri'
    @doc = Nokogiri::HTML(open("http://genius.com/Lin-manuel-miranda-my-shot-lyrics"))
    @words = @doc.css("div[class=song_body-lyrics]").css("a");


  end

  # GET /lyrics/1
  # GET /lyrics/1.json
  def show
  end

  # GET /lyrics/new
  def new
    @lyric = Lyric.new
  end

  # GET /lyrics/1/edit
  def edit
  end

  # POST /lyrics
  # POST /lyrics.json
  def create
    @lyric = Lyric.new(lyric_params)

    respond_to do |format|
      if @lyric.save
        format.html { redirect_to @lyric, notice: 'Lyric was successfully created.' }
        format.json { render :show, status: :created, location: @lyric }
      else
        format.html { render :new }
        format.json { render json: @lyric.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /lyrics/1
  # PATCH/PUT /lyrics/1.json
  def update
    respond_to do |format|
      if @lyric.update(lyric_params)
        format.html { redirect_to @lyric, notice: 'Lyric was successfully updated.' }
        format.json { render :show, status: :ok, location: @lyric }
      else
        format.html { render :edit }
        format.json { render json: @lyric.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lyrics/1
  # DELETE /lyrics/1.json
  def destroy
    @lyric.destroy
    respond_to do |format|
      format.html { redirect_to lyrics_url, notice: 'Lyric was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lyric
      @lyric = Lyric.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def lyric_params
      params.fetch(:lyric, {})
    end
end

class ProceduralGenerator
  attr_accessor :tiles_x, :tiles_y

  def initialize(opts = {})
    @tiles_x = opts[:tiles_x] || 50
    @tiles_y = opts[:tiles_y] || 32
    @map = {}
  end

  def get_row(y)
    @map[y] = {}
    @tiles_x.times do |x|
      @map[y][x] = []
    end
  end
end
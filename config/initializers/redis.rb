$redis = Redis.new Rails.application.config_for(:redis)

if $redis.get('sprite_sheets').nil?
  sprite_sheets = {}
  SpriteSheet.includes(tilesets: [:sprites]).all.map do |sprite_sheet|
    sprite_sheets[sprite_sheet.name] = {
        tilesets: sprite_sheet.tilesets.map do |tileset|
          sprites = {}
          tileset.sprites.map do |sprite|
            sprites[sprite.x] ||= {}
            sprites[sprite.x][sprite.y] = sprite.class_names
          end

          {
              sprite_count_x: tileset.sprite_count_x,
              sprite_count_y: tileset.sprite_count_y,
              sprites: sprites
          }
        end
    }
  end

  $redis.set(
    'sprite_sheets',
    sprite_sheets.to_json
  )
end
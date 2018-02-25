namespace :sprite_sheets do
  task create: :environment do
    {
        'Cave' => [
            'lib/assets/sprite_sheets/cave/cave_A.png',
            'lib/assets/sprite_sheets/cave/cave_B.png'
        ],
        'Desert' => [
            'lib/assets/sprite_sheets/desert/desert_A.png',
            'lib/assets/sprite_sheets/desert/desert_B.png'
        ],
        'Dungeon' => [
            'lib/assets/sprite_sheets/dungeon/dungeon_A.png',
            'lib/assets/sprite_sheets/dungeon/dungeon_B.png'
        ],
        'Grasslands' => [
            'lib/assets/sprite_sheets/grasslands/grasslands_A.png',
            'lib/assets/sprite_sheets/grasslands/grasslands_B.png'
        ],
        'Town' => [
            'lib/assets/sprite_sheets/town/town_A.png',
            'lib/assets/sprite_sheets/town/town_B.png',
            'lib/assets/sprite_sheets/town/town_C.png',
            'lib/assets/sprite_sheets/town/town_D.png'
        ]
    }.each do |sprite_sheet_name, tilesets|
      SpriteSheet.create!(name: sprite_sheet_name, tilesets: tilesets.map { |tileset| Tileset.new(png: File.open(tileset)) })
    end
  end
end
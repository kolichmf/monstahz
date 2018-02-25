namespace :stylesheets do
  task generate: :environment do
    sprites = []

    dir_path = "#{Rails.root}/app/assets/stylesheets/tilesets"
    Dir.foreach(dir_path) {|f| File.delete("#{dir_path}/#{f}") if f != '.' && f != '..'}

    Tileset.all.each do |tileset|
      # Figure out how many sprites are in the image
      dimensions = Paperclip::Geometry.from_file tileset.png
      file_name = tileset.png_file_name.split(".")[0]
      sprite_count_x = (dimensions.width / 16).to_i
      sprite_count_y = (dimensions.height / 16).to_i

      File.open("#{Rails.root}/app/assets/stylesheets/tilesets/#{file_name}.scss", 'w') do |file|
        # Open base class
        file.write(".#{file_name} {\n")
        file.write("\tbackground-image: url(#{tileset.png.url});\n")
        file.write("\twidth: 16px;\n")
        file.write("\theight: 16px;\n\n")

        sprite_count_x.times do |x|
          sprite_count_y.times do |y|

            # Setup classes and append a new Sprite to the sprites list
            sprite_class = "#{file_name}-#{x+1}-#{y+1}"
            class_names = "#{file_name} #{sprite_class}"
            sprites << Sprite.new(class_names: class_names, x: x+1, y: y+1)

            # Open class and set styles
            file.write("\t&.#{sprite_class} {\n")
            file.write("\t\tbackground-position: -#{x * 16}px -#{y * 16}px;\n")
            file.write("\t}\n\n")
          end
        end

        # Close base class
        file.write("}\n")
      end

      # Insert sprite records
      tileset.update_attributes(sprites: sprites, sprite_count_y: sprite_count_y, sprite_count_x: sprite_count_x)
      sprites = []
    end
  end
end
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180225004631) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "sprite_sheets", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sprites", force: :cascade do |t|
    t.string "class_names"
    t.integer "tileset_id"
    t.boolean "walkable"
    t.boolean "potal"
    t.boolean "background"
    t.integer "x"
    t.integer "y"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tilesets", force: :cascade do |t|
    t.string "png_file_name"
    t.string "png_content_type"
    t.integer "png_file_size"
    t.datetime "png_updated_at"
    t.integer "sprite_sheet_id"
    t.integer "sprite_count_x"
    t.integer "sprite_count_y"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

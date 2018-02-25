# Monsters

To get started, pull down the project and run:

`rake db:reset` from the command line.

This should generate all Sprite Sheets, Tilesets, and Sprites so that they're in the database.

This project has a dependency on redis, so you should make sure you install it.  You can do that on OSX by running:

`brew install redis`

If you don't have homebrew installed, install it, then run the command to install redis.

Before running `rails s` make sure you run `redis-server`.
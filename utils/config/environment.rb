require 'bundler'
require 'pry'
require 'colorize'

Bundler.require

Dotenv.load('config/.env') #empty for now...

require_all 'lib'

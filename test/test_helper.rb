ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'minitest/reporters'
require 'minitest/mock'
require 'minitest/spec'
require 'webmock/minitest'
require 'minitest/stub_any_instance'


Dir["#{Rails.root}/test/support/*.rb"].each {|file| require file }

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  Capybara.javascript_driver = :webkit

  extend Minitest::Spec::DSL

  include FactoryBot::Syntax::Methods

  WebMock.disable_net_connect!(allow_localhost: true)

  register_spec_type(self) do |desc|
    desc < ActiveRecord::Base if desc.is_a?(Class)
  end
end

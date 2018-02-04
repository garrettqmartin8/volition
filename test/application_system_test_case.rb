require "test_helper"
require "capybara/webkit"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  Capybara::Webkit.configure do |config|
    config.raise_javascript_errors = false
  end

  driven_by :webkit

  def login_as(user)
    visit login_url
    fill_in "Email", with: user.email
    fill_in "Password", with: "password"
    click_button "Log in"
  end

  def logout
    delete '/logout'
  end
end

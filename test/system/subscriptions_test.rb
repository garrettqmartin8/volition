require "application_system_test_case"

class SubscriptionsTest < ApplicationSystemTestCase
  test "visiting the index" do
    user = create(:user)
    login_as(user)

    visit dashboard_url

    assert_selector "h1", text: "Dashboard"
  end
end

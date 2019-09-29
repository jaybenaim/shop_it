require "application_system_test_case"

class AislesTest < ApplicationSystemTestCase
  setup do
    @aisle = aisles(:one)
  end

  test "visiting the index" do
    visit aisles_url
    assert_selector "h1", text: "Aisles"
  end

  test "creating a Aisle" do
    visit aisles_url
    click_on "New Aisle"

    fill_in "Category", with: @aisle.category
    fill_in "Number", with: @aisle.number
    click_on "Create Aisle"

    assert_text "Aisle was successfully created"
    click_on "Back"
  end

  test "updating a Aisle" do
    visit aisles_url
    click_on "Edit", match: :first

    fill_in "Category", with: @aisle.category
    fill_in "Number", with: @aisle.number
    click_on "Update Aisle"

    assert_text "Aisle was successfully updated"
    click_on "Back"
  end

  test "destroying a Aisle" do
    visit aisles_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Aisle was successfully destroyed"
  end
end

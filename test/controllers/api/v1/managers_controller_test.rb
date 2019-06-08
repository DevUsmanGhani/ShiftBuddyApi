require 'test_helper'

class Api::V1::ManagersControllerTest < ActionDispatch::IntegrationTest
  attr_reader :manager

  setup { @manager = create :manager }

  test 'should create manager' do
    assert_changes 'Manager.count' do
      post '/api/v1/managers', params: manager_params
    end
  end

  test 'should show manager' do
    get "/api/v1/managers/#{manager.id}"
    assert_response :success
  end

  test 'should update manager' do
    put "/api/v1/managers/#{manager.id}", params: manager_params
    assert_response :success
  end

  test 'should delete manager' do
    assert_difference 'Manager.count', -1 do
      delete "/api/v1/managers/#{manager.id}"
    end
    assert_response :success
  end

  private

  def manager_params
    password = Faker::Internet.password

    {
      manager: {
        name: Faker::Name.first_name,
        email: Faker::Internet.email,
        password: password,
        password_confirmation: password
      }
    }
  end
end

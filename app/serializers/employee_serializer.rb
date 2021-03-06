class EmployeeSerializer < ApplicationSerializer
  attributes :name, :id, :username, :manager_id, :status

  attribute :current_shift_id do |employee|
    employee.current_shift ? employee.current_shift.id : nil
  end

  attribute :isWorking, &:working?
end

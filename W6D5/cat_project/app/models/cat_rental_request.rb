# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :bigint           not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CatRentalRequest < ApplicationRecord
  STATUS = ['PENDING', 'APPROVED', 'DENIED']

  validates :cat_id, :start_date, :end_date, presence: true
  validates :status, inclusion: STATUS
  # validates :overlapping_requests

  belongs_to :cat,
    primary_key: :id,
    foreign_key: :cat_id,
    class_name: 'Cat'

  def overlapping_requests 

  end

  def overlapping_approved_requests

  end

  def does_not_overlap_approved_request
    
  end
end

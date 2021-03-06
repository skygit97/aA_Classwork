# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null

require 'action_view'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper

  CAT_COLORS = ['Orange', 'White', 'Black', 'Gray']

  validates :birth_date, :name, presence: true
  validates :color, presence: true, inclusion: CAT_COLORS
  validates :sex, presence: true, inclusion: {in: ['M', 'F']}

   def age
    time_ago_in_words(birth_date)
  end
end

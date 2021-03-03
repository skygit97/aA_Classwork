# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  band_id    :integer
#  live       :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Album < ApplicationRecord
  validates :title, :year, presence: true
  validates :live, inclusion: { in: [true, false]}
  validates :band_id, presence: true, uniqueness: true

  belongs_to :band,
    primary_key: :id,
    foreign_key: :band_id,
    class_name: 'Band'
end

require 'rails_helper'
require 'shoulda/matchers'


RSpec.describe User, type: :model do
  # subject(:user) do User.create!(
  #   email: {'hello@yaho.ciom'},
  #   username: {'asfdadsfs'},
  #   password_digest: {'asdfasdf'}
  #   )
  # end

    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
    it { should have_db_index(:email) }
    it { should validate_presence_of(:username) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { is_expected.to validate_length_of(:password_digest).is_at_least(6) }
    it { is_expected.to validate_length_of(:password_digest).is_at_least(6) }
  

  
  

end




# describe BasketballTeam do
#   describe 'associations' do
#     # 'it' refers to an instance of the BasketballTeam class here
#     # because we have not explicitly specified a subject
#     it { should have_many(:basketball_players)}
#     it { should have_one(:owner)}
#   end
# end
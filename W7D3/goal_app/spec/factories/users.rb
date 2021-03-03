FactoryBot.define do
  factory :user do
    email {'hi@gmail.com'}
    username {'hello'}
    password_digest {'helololol'}
    # session_token ''
  end
end

# FactoryBot.define do
#   factory :cat do # The name matters. :cat factory returns a Cat object.
#     name 'Fluffy'
#     color 'Dark Brown'
#     email 'meow@meow.com'
#     owner_id 1
#     active true
#     temperament 'mild'
#   end
# end
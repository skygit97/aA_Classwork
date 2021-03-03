class User < ApplicationRecord
  validates :email, :username, presence: true, uniqueness: true
  validates :password_digest, presence: true, length: {minimum: 6}, allow_nil: true
end

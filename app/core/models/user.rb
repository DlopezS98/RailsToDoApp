class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  self.table_name = 'users'

  #==========================================================================================
  # VALIDATIONS
  #==========================================================================================
  validates :email, presence: true, uniqueness: true, format: { with: Constants::RegExp::EMAIL }

  #==========================================================================================
  # RELATIONSHIPS.
  #==========================================================================================

  has_many :notes, 
    class_name: 'Note', 
    foreign_key: 'user_id', 
    primary_key: 'id'
end

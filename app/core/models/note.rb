class Note < ApplicationRecord
    self.table_name = 'notes'
    
    validates :title, presence: true
    validates :description, allow_blank: true, uniqueness: false

    belongs_to :users, 
        class_name: 'User', 
        foreign_key: 'user_id', 
        primary_key: 'id'
end

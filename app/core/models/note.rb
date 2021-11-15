class Note < ApplicationRecord
    belongs_to :users, 
        class_name: 'user', 
        foreign_key: 'user_id', 
        primary_key: 'id'
end

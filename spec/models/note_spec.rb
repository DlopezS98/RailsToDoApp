require 'rails_helper'

RSpec.describe Note, type: :model do
  describe 'Model Fields' do
    describe 'precense' do
      subject { FactoryBot.build(:note) }
      it {
        is_expected.to validate_presence_of(:title)
      }
    end

    describe 'columns validations' do
      it { should have_db_column(:title).of_type(:string) }
      it { should have_db_column(:created_at).of_type(:datetime) }
    end
    
  end

  describe 'relationships' do
    describe 'association with notes' do
      it { should belong_to(:users).class_name('User').with_foreign_key('user_id') }
    end
  end
end

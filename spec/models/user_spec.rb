require 'rails_helper'

RSpec.describe User, type: :model do
  user_email = '01dlopezs98@gmail.com'
  # first test..
  it "must have an email with value #{user_email}" do
    user = FactoryBot.create(:user)
    expect(user.email).to eq(user_email)
  end

  describe 'Model Fields' do
    describe 'Validations' do
      it { is_expected.not_to allow_value('01dlopezs98gmail.com').for(:email) }
    end

    describe 'precense' do
      it { is_expected.to validate_presence_of(:email).with_message(/can't be blank/) }
    end
    
  end
end

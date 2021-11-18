FactoryBot.define do
  factory :user, class: User do
    id { 1 }
    email { '01dlopezs98@gmail.com' }
    password { 'password' }
    created_at { '2021-11-17 13:39:00.7070383 -0600' }
    updated_at { '2021-11-17 13:39:00.7070383 -0600' }
    
    trait :with_note do
      after(:create) do |note|
        create(:note, user_id: user.id)
      end
    end
  end

  factory :user_email_sequence, class: User do
    id { 2 }
    sequence (:email) { |n| "0#{n}dlopezs98@gmail.com" } # always create a different email when try to build with the same factory twice
    password { "password" }
    created_at { '2021-11-17 13:39:00.7070383 -0600' }
    updated_at { '2021-11-17 13:39:00.7070383 -0600' }
  end
end

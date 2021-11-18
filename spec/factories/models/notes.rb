FactoryBot.define do
  factory :note, class: Note do
    id { 1 }
    title { 'Ruby On Rails' }
    description { 'Some description' }
    association :users, factory: :user, strategy: :build
    # created_at { Time.now }
  end
end

require 'rails_helper'

# Related resources:
# Devise: https://github.com/heartcombo/devise#controller-tests

RSpec.describe NotesController, type: :controller do
    # local variablle ... factory -> factory-name
    let(:logged_user) { FactoryBot.create(:user) }

    before do
        # method sign_in allowed by devise
        # required config: rails_helper line: 48
        sign_in logged_user
    end

    describe 'Controller actions (methods)' do
        describe 'Index' do
            describe 'this will be an unauthenticated request (redirect to loggin)' do
                before {
                    sign_out logged_user # sign out to test the redirection before make the request
                    get :index
                }
                it {
                    should redirect_to(new_user_session_path)
                }
            end

            describe 'Authenticated Requests' do
                before { get :index }
                it {
                    expect(response).to have_http_status(200)
                    # assert template require (gem 'rails-controller-testing')
                    expect(response).to render_template(:index)
                    expect(response.content_type).to eq('text/html; charset=utf-8')
                    #assings - value of the global variable defined in the action of the controller
                    expect(assigns(:notes)).to eq(Note.where(user_id: logged_user.id))
                }
            end
        end

        describe 'New & Create' do
          describe 'New' do
            describe 'Should have success reponse and instance type of model Note' do
                before { get :new }
                it {
                    expect(response).to have_http_status(:ok) # should be "have_http_status(200)"
                    expect(assigns(:note)).to be_an_instance_of(Note)
                    expect(response).to render_template(:new)
                    expect(response.content_type).to eq('text/html; charset=utf-8')
                    should_not set_flash[:notice]
                    # expect(flash[:notice]).to match(/Note was successfully created/)
                 }
            end
          end

          describe 'Create' do
            let(:note_param) { FactoryBot.create(:note) }
            before { post :create, params: { note: { title: note_param.title, descritpion: note_param.description } } }
            it 'should redirect to note list' do
                # puts response.notice
                expect(response).to have_http_status(:found)
                should redirect_to(note_path(id: response.header["note_id"]))
                expect(response.content_type).to eq('text/html; charset=utf-8')
            end

          end
        end

        describe 'Update' do
          describe 'should be success' do
            let(:note_param) { FactoryBot.create(:note) }
            before { patch :update, params: { id: note_param.id, note: { title: "new title", descritpion: "other description" } } }
            it { 
                expect(response).to have_http_status(:found)
                should redirect_to(note_path(id: response.header["note_id"]))
                expect(response.content_type).to eq('text/html; charset=utf-8')
            }
          end
        end
        
        describe 'Delete or Destroy' do
          describe 'should be success' do
            let(:note_to_delete) { FactoryBot.create(:note) }
            before { delete :destroy, params: { id: note_to_delete.id } }
            it {
                should use_before_action(:authenticate_user!) # validate before action is raised
                expect(response).to have_http_status(:found) # status code: 302
                should redirect_to(notes_url)
                expect(response.content_type).to eq('text/html; charset=utf-8')
                # expect(response.body).to include("Note was successfully destroyed.")
            }
          end

          describe "should fail, note doesn't exists" do
            # Generate random id (rand() * 10).to_i
            before { delete :destroy, params: { id: 100000 } }
            it {
              expect(response).to have_http_status(:not_found)
              expect(response.content_type).to eq('text/html; charset=utf-8')
              # expectation when an error is raised in the model...
              # expect { delete :destroy, params: { id: 100000 } }.to raise_error(ActiveRecord::RecordNotFound)
            }
          end
        end
        
        describe 'Allowed params' do
            it 'should permit params on create' do
              params = attributes_for(:note, title: 'Ruby On Rails', description: 'some description')
              # params = { note: { title: 'Ruby On Rails', description: 'some description' } }
              should permit(:title, :description).for(:create, params: { note: params }).on(:note)
            end
        end
    end
end

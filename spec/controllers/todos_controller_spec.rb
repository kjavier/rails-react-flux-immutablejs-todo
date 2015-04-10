require 'rails_helper'

RSpec.describe TodosController, type: :controller do
  describe 'GET #index' do
    before do
      get :index
    end

    it 'renders :index' do
      expect(response).to render_template(:index)
    end

    it 'returns a 200 OK status' do
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'POST #create' do
    before do
      @attributes = build(:todo).attributes
    end

    context 'with invalid params' do
      before do
        post :create, { todo: { name: '' } }
      end

      it 'renders json error messages' do
        expect(JSON.parse(response.body)).to include('todos')
      end

      it 'returns a 404 status' do
        expect(response).to have_http_status(404)
      end
    end
  end
end
